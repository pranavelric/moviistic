import React from 'react';
import { useEffect } from 'react';
import { useState,useRef } from 'react';
import { useParams } from 'react-router-dom';
import tmdbApi from '../../api/tmdbApi';

export default function VideoList(props) {
    const {category}= useParams();
    const [videos,setVideos]= useState([]);

    useEffect(()=>{
        const getVideos = async ()=>{
            const res = await tmdbApi.getVideos(category,props.id);
            setVideos(res.results.slice(0,5));
        }
        getVideos();

    },[category,props.id]);
    return (
        <>
            {
                videos.map((item,i)=>(
                    <Video key={i} item={item}></Video>
                ))
            }
        </>
  )
}


const Video = props =>{
    const item = props.item;
    const iframeRef = useRef(null);
    useEffect(()=>{
        const height = iframeRef.current.offsetWidth*9/26+'px';
        iframeRef.current.setAttribute('height',height);

    },[]);

    return (
        <div className="video">
            <div className="video_title">
                <h2>{item.name}</h2>
            </div>
            <iframe
             src={`https://www.youtube.com/embed/${item.key}`}
             ref={iframeRef}
             width="100%"
             title="video"
            >
            </iframe>
        </div>
    )
}