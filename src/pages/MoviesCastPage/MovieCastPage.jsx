import { fetchCast } from "api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import css from './MovieCastPage.module.css';
import defaultImg from 'img/defaultImg.jpg';

const MovieCastPage = () => {
    const [cast, setCast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const {movieId} = useParams();
    
    useEffect(() => {
        const fetchFilmCast = async () => {
            try {
                setLoading(true);
                const data = await fetchCast(movieId);
                setCast(data);
            } catch(error){
                setError(error.message);
            } finally {
                setLoading(false);
            }       }

        fetchFilmCast();
    }, [movieId]);
    
    const elements = cast.map(({id, name, profile_path}) => (
        <li key={id}>
          <img src={profile_path ? `https://image.tmdb.org/t/p/original${profile_path}`: defaultImg} alt={name}
            width={50} className={css.castPhoto}/>
          <p>{name}</p>
        </li>))

    return (
        <>
        {loading && <p>...Loading</p>}
        {error && <p>{error}</p>}
        {cast.length > 0 && <ol>
                   {elements}
                 </ol>}
        </>
    )
}

export default MovieCastPage;