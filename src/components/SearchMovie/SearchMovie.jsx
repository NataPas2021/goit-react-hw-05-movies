// import { useState, useEffect} from 'react';
// import css from './SearchMovie.module.css';
import SearchForm from './SearchForm/SearchForm';
// import { useSearchParams } from 'react-router-dom';
// import { fetchFilmsBySearch } from 'api';
// import SearchedMoviesList from './SearchedMovieList/SearchedMovieList';

const SearchMovie = () => {
    
    return (
        <>
        <SearchForm  />
        {/* {error && <p className={css.error}>{error}</p>}
        {loading && <p>...Loading</p>}
        {isMovies && <SearchedMoviesList items={movies} />} */}
        {/* {isMovies && <div className={css.loadMoreWrapper}>
            <Button onClick={loadMore} type="button">Load more</Button>
            </div>} */}
        </>
    )
}

export default SearchMovie;