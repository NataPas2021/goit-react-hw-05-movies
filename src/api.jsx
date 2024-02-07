import axios from 'axios';

const API_KEY = '5cf59ee4e900eea5cdca6ff85cfcf632';

const instance = axios.create ({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: API_KEY
    }
})


export const FetchTrendingMovies = () => {
    return instance.get('/trending/movie/day');  
}


