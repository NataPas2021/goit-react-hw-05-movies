import { useState, useEffect } from "react";
//import {Link} from 'react-router-dom';
import css from '../MoviesList/MoviesList.module.css';
import { FetchTrendingMovies } from "api";
//import { fetchTrending } from "api"; 

const MoviesList = () => {
 const [movies, setMovies] = useState();
 const [isLoading, setIsLoading] = useState(false);
 const [error, setError] = useState(null);

 
useEffect(() => {
    const fetchTrend = async () => {
        try {
            setIsLoading(true);
            const data = await FetchTrendingMovies();
            console.log(data);
            setMovies(data?.length ? data : []);
            console.log(movies);
        }
        catch {
            setError(error);
        }
        finally {
            setIsLoading(false); 
        }
    }

    fetchTrend();

}, [])

// useEffect(() => {
//         fetchTrending()
//           .then(films => {
//             setMovies(films.results);
//           })
//           .catch(error => console.log(error));
//       }, []);
 

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