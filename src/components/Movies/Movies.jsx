import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import css from '../Movies/Movies.module.css';
import { FetchTrendingMovies } from "api";

const Movies = () => {
 const [movies, setMovies] = useState();
 const [isLoading, setIsLoading] = useState(false);
 const [error, setError] = useState(null);

 useEffect(() => {
    const fetchMovies = async() => {
    try{
        isLoading(true);
        const {response} = await FetchTrendingMovies();
        console.log(response);
        //setMovies(data?.length ? data : [])
    } 
    catch {
        //setError(error.message);
    }
    finally {
        setIsLoading(false);
    } 
}

 fetchMovies();

 }, )
 

//  const elements = movies.map(({ id, title }) => (<li key={id} className={css.item}>
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

export default Movies;