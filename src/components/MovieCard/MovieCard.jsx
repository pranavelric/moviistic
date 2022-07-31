import './movieCard.scss';
import React from 'react';

import { Link } from 'react-router-dom';
import Button from '../button/Button';
import { CATEGORY } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';


export default function MovieCard(props) {
    const item = props.item;
    const link = '/'+ CATEGORY[props.category]+'/'+item.id;
    const bg = apiConfig.w500Image(item.poster_path||item.backdrop_path);

    return (
            <Link to={link}>
                <div className="movie_card"style={{backgroundImage: `url(${bg})`}}>
                    <Button>
                        <i className="bx bx-play"></i>
                    </Button>
                </div>
                <h3>{item.title||item.name}</h3>
            </Link>
    )
}
