import { useState, useEffect } from "react";
//import {Link} from 'react-router-dom';
import css from '../MoviesList/MoviesList.module.css';
import { FetchTrendingMovies } from "api";

const MoviesList = () => {
 const [movies, setMovies] = useState();
 const [isLoading, setIsLoading] = useState(false);
 const [error, setError] = useState(null);

 useEffect(() => {
    const fetchMovies = async() => {
    try{
        isLoading(true);
        const {results} = await FetchTrendingMovies();
        console.log(results);
        setMovies(results?.length ? results : [])
    } 
    catch {
        setError(error);
    }
    finally {
        setIsLoading(false);
    } 
}

 fetchMovies();

 }, )
 

//  const elements = movies.map(({ id, title }) => (
//     <li key={id} className={css.item}>
//         <Link to={`/movies/${id}`}>{title}</Link>
//     </li>));

 return (
    <>
    {error && <p className={css.error}>{error}</p>}
    {isLoading && <p>...Loading</p>}
    {/* {Boolean(elements.length) && (<ul className={css.list}>
        {elements}
    </ul>)} */}
</>
 )

}

export default MoviesList;