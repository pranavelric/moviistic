import './movieGrid.scss';
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router';
import MovieCard from '../MovieCard/MovieCard';
import Button, { OutlineButton } from '../button/Button';

import tmdbApi, { CATEGORY, movieType, tvType } from '../../api/tmdbApi';


export default function MovieGrid(props) {
    const [items, setItems] = useState([]);

    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);

    const { keyword } = useParams();


    useEffect(()=>{
        const getList= async()=>{

        }
        
    },[props.category,keyword])

    return (
    <div>MovieGrid</div>
  )
}
