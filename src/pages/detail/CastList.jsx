import React from 'react'
import { useParams } from 'react-router-dom'
import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import { useState } from 'react';
import { useEffect } from 'react';

export default function CastList(props) {
    const {category} = useParams();
    const [casts, setCasts] = useState([]);


    useEffect(()=>{
        const getCredits = async ()=>{
            const res = await tmdbApi.credits(category,props.id);
            setCasts(res.cast.slice(0,10));

        }
        getCredits();
    },[category,props.id]);

  return (
        <div className="casts">
            {
                casts.map((cast,i)=>(
                    <div className="casts_item" key={i}>
                        <div className="casts_item_img" style={{backgroundImage:`url(${apiConfig.w500Image(cast.profile_path)})`}}></div>
                        <p className="casts_item_name">{cast.name}</p>
                    </div>
                ))
            }
        </div>
  )
}
