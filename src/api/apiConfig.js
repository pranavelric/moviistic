const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: process.env.REACT_APP_TMDB_API_KEY,
    originalImage: (imagePath)=> `https://image.tmdb.org/t/p/original/${imagePath}`,
    w500Image: (imagePath)=> `https://image.tmdb.org/t/p/w500/${imagePath}`
}

export default apiConfig