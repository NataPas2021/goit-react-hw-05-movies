import axios from 'axios';

const API_KEY = '5cf59ee4e900eea5cdca6ff85cfcf632';

export const FetchTrendingMovies = async () => {
    const data = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`); 
    //console.log(data.data.results);
    return data.data.results; 
}

export const fetchMovieById = async (movie_id) => {
    const data = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}`)
    console.log(data.data);
    return data.data;
}

export const fetchCast = async (movie_id) => {
    const data = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${API_KEY}`);
    console.log(data.data.cast);
    return data.data.cast;
}

export const fetchFilmsBySearch = async (search, page) => {
    const data = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${search}&page=${page}&api_key=${API_KEY}`);
    //console.log(data.data.results);
    return data.data.results;
}

export const fetchReviewsById = async (movie_id) => {
    const data = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=${API_KEY}`);
    //console.log(data.data.results)
    return data.data.results;
}

// export async function fetchTrending() {
//     const res = await fetch(
//       `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
//     );
//     const info = await res.json();
//     console.log(info);
//     return info;
//   }

