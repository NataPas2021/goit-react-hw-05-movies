import css from './MoviesList.module.css';
import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({movies}) => {
  const location = useLocation();

    const elements = movies.map(({id, title}) => 
    (
        <li key={id} className={css.item}>
          <Link to={`/movies/${id}`} state={{from: location}} >{title}</Link>
        </li> 
    )
    )

    return (
     <>
      <ul className={css.list}>
                {elements}
      </ul>
     </>
    )
}

export default MoviesList;