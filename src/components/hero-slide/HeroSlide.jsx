import React, { useState } from 'react';
import { useEffect } from 'react';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {useLocation,useParams,useNavigate} from 'react-router-dom';
import tmdbApi, {CATEGORY,movieType} from '../../api/tmdbApi';
import Button, {OutlineButton} from '../button/Button';
import './heroSlide.scss';
import apiConfig from '../../api/apiConfig';

import { EffectFade } from 'swiper';
import { useRef } from 'react';
import Modal,{ModalContent} from '../modal/Modal';

export default function HeroSlide() {
    SwiperCore.use([Autoplay])
    const [movieItems,setMovieItems] = useState([]);

    useEffect(()=>{
     
      const getMovies = async()=>{
        const params = {page:1}
        try{
       
            const response = await tmdbApi.getMoviesList(movieType.popular,{params});
            setMovieItems(response.results.slice(1,10));
            // console.log(response);
        }
        catch{
          console.log('error');
        }
      }
      getMovies();
    },[]);

  return (
    <div className='hero_slide'>
        <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        // speed={500}
        slidesPerView={1}
        >
          {
            movieItems.map((item,i)=>(
              <SwiperSlide key={i}>
                {({isActive})=>(
                    <HeroSlideItem item={item} className={`${isActive ? 'active' : ''}`} />
                  )}
              </SwiperSlide>
            ))
          }
        </Swiper>

        {
                movieItems.map((item, i) => <TrailerModal key={i} item={item}/>)
            }
        
    </div>
  )
}


const HeroSlideItem = props =>{
  let history = useNavigate();
  const item = props.item;
  const background  = apiConfig.originalImage(item.backdrop_path?item.backdrop_path:item.poster_path);

  const setModalActive = async()=>{
    const modal = document.querySelector(`#modal_${item.id}`);
    console.log(modal);
    const videos = await tmdbApi.getVideos(CATEGORY.movie,item.id);
    console.log(videos);
    if(videos.results.length>0){
      const videSrc = 'https://www.youtube.com/embed/' + videos.results[0].key;
      console.log(videSrc)
      
      modal.querySelector('.modal_content > iframe').setAttribute('src', videSrc);
    }
    else{

      modal.querySelector('.modal_content').innerHTML = 'No trailer';
    }
    modal.classList.toggle('active');
  }
  
return (
      <div   className={`hero_slide_item ${props.className}`}
      style={{backgroundImage: `url(${background})`}}>
              <div className="hero_slide_item_content container">
              <div className="hero_slide_item_content_info">
                <h2 className="title">{item.title}</h2>
                <div className="overview">{item.overview}</div>
                <div className="btns">
                        <Button onClick={() => history('/movie/' + item.id)}>
                            Watch now
                        </Button>
                        <OutlineButton onClick={setModalActive}>
                            Watch trailer
                        </OutlineButton>
                    </div>
              </div>
              <div className="hero_slide_item_content_poster">
                    <img src={apiConfig.w500Image(item.poster_path)} alt="" />
                </div>
      </div>
      </div>
      
);

}

const TrailerModal = props => {
  const item = props.item;

  const iframeRef = useRef(null);

  const onClose = () => iframeRef.current.setAttribute('src', '');

  return (
      <Modal active={false} id={`modal_${item.id}`}>
          <ModalContent onClose={onClose}>
              <iframe ref={iframeRef} width="100%" height="500px" title="trailer"></iframe>
          </ModalContent>
      </Modal>
  )
}