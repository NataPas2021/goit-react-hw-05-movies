import { FetchTrendingMovies } from 'api';
import css from './Movies.module.css';
import { useState, useEffect } from 'react';
import MoviesList from 'components/MoviesList/MoviesList';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
     const fetchTrendFilms = async () => {
        try {
            setLoading(true);
            const data = await FetchTrendingMovies();
            setMovies(data?.length ? data : []);
        } catch(error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
     }

     fetchTrendFilms();

    }, [])

    return (
     <>
      {error && <p className={css.error}>{error}</p>}
            {loading && <p>...Loading</p>}
            {movies && <MoviesList movies={movies} />}
     </>
    )
}

export default Movies;