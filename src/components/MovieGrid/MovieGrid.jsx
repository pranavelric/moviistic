import './movieGrid.scss';
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router';
import MovieCard from '../MovieCard/MovieCard';
import Button, { OutlineButton } from '../button/Button';

import tmdbApi, { CATEGORY, movieType, tvType } from '../../api/tmdbApi';
import Input from '../Input/Input';


export default function MovieGrid(props) {
    const [items, setItems] = useState([]);

    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);

    const { keyword } = useParams();


    useEffect(()=>{
        const getList= async()=>{
                    let response = null;
                    if (keyword===undefined){
                        const params = {};
                        switch(props.category){
                            case CATEGORY.movie:
                                response = await tmdbApi.getMoviesList(props.type?props.type:movieType.popular,{params});
                                break;
                            default:
                                response = await tmdbApi.getTvList(props.type?props.type:tvType.popular,{params});
                            
                        }
                    }
                    else{
                        const params=  {
                            query:keyword
                        }
                        response = await tmdbApi.search(props.category,{params});
                    }
                    setItems(response.results);
                    setTotalPage(response.total_pages);
        }
        getList();
        
    },[props.category,keyword,props.type]);

    const loadMore = async()=>{
        let response = null;
        if (keyword === undefined){
            const params = {
                page:page+1
            };
            switch(props.category){
                case CATEGORY.movie:
                                response = await tmdbApi.getMoviesList(props.type?props.type:movieType.popular,{params});
                                break;
                default:
                                response = await tmdbApi.getTvList(props.type?props.type:tvType.popular,{params});
                
            }
        }else{
            const params = {
                page: page + 1,
                query: keyword
            }
            response = await tmdbApi.search(props.category, {params});
        
        }
        setItems([...items,...response.results]);
        setPage(page+1);
    }

    return (
            <>
                <div className="section mb-3">
                <MovieSearch category={props.category} keyword={keyword}/>
                </div>
                <div className="movie_grid">
                    {
                        items.map((item,i)=><MovieCard category={props.category} item={item} key={i}/>)
                    }
                </div>
                {
                    page<totalPage?(
                        <div className="movie_grid_loadmore">
                                <OutlineButton className="small" onClick={loadMore}>Load More</OutlineButton>
                        </div>

                    ):null
                }
            
            </>
  )
}



const MovieSearch = (props)=>{
    const history = useNavigate();
    const [keyword,setKeyword]= useState(props.keyword?props.keyword:'');
    const goToSearch = useCallback(
        ()=>{
            if(keyword.trim().length>0){
                history(`/${CATEGORY[props.category]}/search/${keyword}`);
            }
        },
        [keyword,props.category,history]
    );

    useEffect(()=>{
        const enterEvent = (e)=>{
            e.preventDefault();
            if(e.keyCode===13){
                goToSearch();
            }
        }
        document.addEventListener('keyup',enterEvent);
        return ()=>{
            document.removeEventListener('keyup',enterEvent);
        };

    },[keyword,goToSearch]);

    return (
        <div className="movie_search">
             <Input
                type="text"
                placeholder="Enter keyword"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />
            <Button className="small" onClick={goToSearch}>Search</Button>
        </div>
    )

}