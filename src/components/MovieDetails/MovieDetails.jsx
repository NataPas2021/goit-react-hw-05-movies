import { fetchMovieById } from 'api';
import css from './MovieDetails.module.css';
import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation, Link, Outlet } from 'react-router-dom';
import MovieMainInfo from './MovieMainInfo/MovieMainInfo';
//import { Link } from 'react-router-dom';

const MovieDetails = () => {
    const [movie, setMovie] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const {movieId} = useParams();
    
    const location = useLocation();

    const from = location.state?.from || "/";

    const navigate = useNavigate();

    useEffect(() => {
        const fetchById = async () => {
            try {
                setLoading(true);
                const data = await fetchMovieById(movieId);
                setMovie(data);

            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false);
            }
        }

        fetchById();
    }, [movieId])

    const goBack = () => navigate(from);

    return(
        <>
        {loading && <p>...Loading</p>}
        {error && <p>Error: {error}</p>}
        <button type='button' className={css.buttonBackHome} onClick={goBack}>Go back</button>
        {movie && (
            <>
            <MovieMainInfo movie={movie} />
            <h2 className={css.addInfo}>Additional information</h2>
            <ul className='movieDetails'>
              <li><Link to='cast' state={{from}}>Cast</Link></li>
              <li><Link to='reviews' state={{from}}>Reviews</Link></li>
           </ul>
            <Outlet />
        </>
        )}
        </>
    )
}

export default MovieDetails;