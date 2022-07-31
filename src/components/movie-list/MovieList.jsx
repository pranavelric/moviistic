import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import './movieList.scss';


import { SwiperSlide, Swiper } from 'swiper/react';
import { Link } from 'react-router-dom';

import Button from '../button/Button';

import tmdbApi, { CATEGORY, category } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import MovieCard from '../MovieCard/MovieCard';


export default function MovieList(props) {
    const [items,setItems] = useState([]);

    useEffect(()=>{
            const getList = async()=>{
                let response = null;
                const params = {};
                if (props.type!=='similar'){
                    switch(props.category){
                        case CATEGORY.movie:
                            response = await tmdbApi.getMoviesList(props.type,{params});
                            break;
                        default:
                            response = await tmdbApi.getTvList(props.type,{params});
                    }

                }else{
                        response = await tmdbApi.similar(props.category,props.id);
                }
                setItems(response.results);
            };
            getList();
    },[]);
  return (
    <div className='movie_list'>
            <Swiper grabCursor={true}
                    spaceBetween={10}
                    slidesPerView={'auto'}
            >
                        {
                            items.map((item,i)=>(
                                <SwiperSlide key={i}>
                                   <MovieCard item={item} category={props.category}/>
                                </SwiperSlide>
                            ))
                        }
            </Swiper>
    </div>
  )
}
