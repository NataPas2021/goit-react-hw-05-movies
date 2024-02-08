import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import css from '../MoviesList/MoviesList.module.css';
import { FetchTrendingMovies } from "api";
//import { fetchTrending } from "api"; 

const MoviesList = () => {
 const [movies, setMovies] = useState([]);
 const [isLoading, setIsLoading] = useState(false);
 const [error, setError] = useState(null);

 
useEffect(() => {
    const fetchTrend = async () => {
        try {
            setIsLoading(true);
            const data = await FetchTrendingMovies();
            setMovies(data?.length ? data : []);
        }
        catch {
            setError('Oops, something went wrong. Please, reload the page');
        }
        finally {
            setIsLoading(false); 
        }
    }

    fetchTrend();

}, []);

console.log(movies);

 return (
    <>
    {error && <p className={css.error}>{error}</p>}
    {isLoading && <p>...Loading</p>}
     <ul className={css.list}>
    {movies.map(({id, title}) => {
      return <li key={id} className={css.item}>
        <Link to={`/movies/${id}`} >{title}</Link>
        </li>
  })} 
    </ul>
</>
 )

}

export default MoviesList;




// useEffect(() => {
//         fetchTrending()
//           .then(films => {
//             setMovies(films.results);
//           })
//           .catch(error => console.log(error));
//       }, []);