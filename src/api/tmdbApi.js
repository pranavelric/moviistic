import axiosClient from "./axiosClient";

export const category = {
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
        const url = category[category] + '/'+id +'videos';
        return axiosClient.get(url, {params: {}});
    },
    search:(category,params)=>{
        const url = 'search/'+category[category];
        return axiosClient.get(url,params);
    },
    detail:(category,id,params)=>{
        const url = category[category] + '/' + id;
        return axiosClient.get(url, params);
    },
    credits: (category, id) => {
        const url = category[category] + '/' + id + '/credits';
        return axiosClient.get(url, {params: {}});
    },
    similar: (category, id) => {
        const url = category[category] + '/' + id + '/similar';
        return axiosClient.get(url, {params: {}});
    },
    trending:(category,time_window)=>{
        const url = category[category]+'/'+time_window;
        return axiosClient.get(url,{params: {}});
    },
    discover:(category,params)=>{
        const url = 'discover/'+ category[category];
        return axiosClient.get(url,params);
    },
    genre:(category)=>{
        const url = 'genre/'+category[category]+'/list';
        return axiosClient.get(url, {params: {}});
    },
    person:(id)=>{
        const url = 'person/'+id;
        return axiosClient.get(url, {params: {}});
    }
    
}

export default tmdbApi;