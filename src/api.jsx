import axios from 'axios';

const API_KEY = '5cf59ee4e900eea5cdca6ff85cfcf632';

const instance = axios.create ({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: API_KEY
    }
})


export async function FetchTrendingMovies () {
    const response = await instance.get('/trending/movie/day'); 
    console.log(response);
    return response; 

}
