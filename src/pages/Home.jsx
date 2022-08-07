import React from 'react';
import HeroSlide from '../components/hero-slide/HeroSlide';
import {Link} from 'react-router-dom';
import { OutlineButton } from '../components/button/Button';

import { CATEGORY, movieType, tvType } from '../api/tmdbApi';
import MovieList from '../components/movie-list/MovieList';


export default function Home() {
  return (
    <>
            <HeroSlide/>
            <div className="container">
              <div className="section mb-3">
                <div className="section_header mb-2">
                  <h2>Trending Movies</h2>
                  <Link to="/movie/type/popular">
                      <OutlineButton className="small">View more</OutlineButton>
                  </Link>
                </div>
                  <MovieList category={CATEGORY.movie} type={movieType.popular}/>
              </div>

              <div className="section mb-3">
                <div className="section_header mb-2">
                  <h2>Top Rated Movies</h2>
                  <Link to="/movie/type/top_rated">
                      <OutlineButton className="small">View more</OutlineButton>                    
                  </Link>
                </div>
                <MovieList category={CATEGORY.movie} type={movieType.top_rated}/>
              </div>

              <div className="section mb-3">
                <div className="section_header mb-2">
                  <h2>Upcoming Movies</h2>
                  <Link to="/movie/type/upcoming">
                      <OutlineButton className="small">View more</OutlineButton>                    
                  </Link>
                </div>
                <MovieList category={CATEGORY.movie} type={movieType.upcoming}/>
              </div>

             
        
              

              <div className="section mb-3">
                    <div className="section_header mb-2">
                        <h2>Trending TV</h2>
                        <Link to="/tv/type/popular">
                            <OutlineButton className="small">View more</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={CATEGORY.tv} type={tvType.popular}/>
              </div>

              <div className="section mb-3">
                <div className="section_header mb-2">
                  <h2>Top Rated TV</h2>
                  <Link to="/tv/type/top_rated">
                      <OutlineButton className="small">View more</OutlineButton>
                  </Link>
                </div>
                <MovieList category={CATEGORY.tv} type={tvType.top_rated}/>
              </div>
              
            </div>
    </>
  )
}
