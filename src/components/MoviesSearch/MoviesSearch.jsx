import css from '../MoviesSearch/MoviesSearch.module.css';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MoviesSearchForm from './MoviesSearchForm/MoviesSearchForm';
import MoviesList from 'components/MoviesList/MoviesList';
import { fetchFilmsBySearch } from 'api';
import ButtonLoadMore from 'components/ButtonLoadMore/ButtonLoadMore';


const MoviesSearch = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [searchParams, setSearchParams] = useSearchParams();

    const search = searchParams.get('search');
    const page = searchParams.get('page');

    useEffect(() => {
        const fetchFilmRequest = async () => {
            try {
                setLoading(true);
                const data = await fetchFilmsBySearch(search, page);
                setMovies(prevFilms => data?.length ? [...prevFilms, ...data] : prevFilms);
            } catch(error) {
                setError(error)
            } finally{
                setLoading(false);
            }       
        }
        
        if(search) {
            fetchFilmRequest();
        }

    }, [search, page]);

    const handleSearch = ({ search }) => {
        setSearchParams({search, page: 1});
        setMovies([]);
    }

    const loadMore = () => setSearchParams({search, page: Number(page) + 1});

    const isFilms = Boolean(movies.length);

    return (
        <>
          <MoviesSearchForm onSubmit={handleSearch} />
          {error && <p className={css.error}>{error}</p>}
          {loading && <p>...Loading</p>}
          {isFilms && <MoviesList movies={movies} />}
          {isFilms && 
            <div className={css.loadMoreWrapper}>
                <ButtonLoadMore onClick={loadMore} type="button">Load more</ButtonLoadMore>
            </div>}
        </>
    )
}

export default MoviesSearch;