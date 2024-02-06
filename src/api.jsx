import axios from 'axios';

const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Y2Y1OWVlNGU5MDBlZWE1Y2RjYTZmZjg1Y2ZjZjYzMiIsInN1YiI6IjYyZDQ2ZjAzMjNiY2Y0MDA2N2JjYjlhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w5awqCkwdiuiKizkHQ6nd_Gg4XFts1n4CVGP8Yrp2uM';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/trending/movie/';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;


export const FetchTrendingMovies = async () => {
    const response = await axios.get();
    return response;
}
