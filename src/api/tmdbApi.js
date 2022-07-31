import axiosClient from "./axiosClient";

export const CATEGORY = {
    tv: 'tv',
    movie: 'movie',
    person:'person'
}

export const movieType = {
    latest: 'latest',
    popular: 'popular',
    upcoming: 'upcoming',
    top_rated: 'top_rated',
    now_playing: 'now_playing'
}

export const tvType = {
    latest: 'latest',
    popular: 'popular',
    top_rated: 'top_rated',
    on_the_air: 'on_the_air',
    airing_today: 'airing_today'
}

const tmdbApi = {
    getMoviesList:(type,params)=>{
        const url = 'movie/' + movieType[type];
        return axiosClient.get(url,params);
    },
    getTvList:(type,params)=>{
        const url = 'tv/' + movieType[type];
        return axiosClient.get(url,params);
    },
    getVideos:(category,id)=>{
        console.log(category);
        const url = CATEGORY[category] + '/'+id +'/videos';
        return axiosClient.get(url, {params: {}});
    },
    search:(category,params)=>{
        const url = 'search/'+CATEGORY[category];
        return axiosClient.get(url,params);
    },
    detail:(category,id,params)=>{
        const url = CATEGORY[category] + '/' + id;
        return axiosClient.get(url, params);
    },
    credits: (category, id) => {
        const url = CATEGORY[category] + '/' + id + '/credits';
        return axiosClient.get(url, {params: {}});
    },
    similar: (category, id) => {
        const url = CATEGORY[category] + '/' + id + '/similar';
        return axiosClient.get(url, {params: {}});
    },
    trending:(category,time_window)=>{
        const url = CATEGORY[category]+'/'+time_window;
        return axiosClient.get(url,{params: {}});
    },
    discover:(category,params)=>{
        const url = 'discover/'+ CATEGORY[category];
        return axiosClient.get(url,params);
    },
    genre:(category)=>{
        const url = 'genre/'+CATEGORY[category]+'/list';
        return axiosClient.get(url, {params: {}});
    },
    person:(id)=>{
        const url = 'person/'+id;
        return axiosClient.get(url, {params: {}});
    }
    
}

export default tmdbApi;