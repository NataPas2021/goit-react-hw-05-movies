import css from './MovieMainInfo.module.css';
import defaultImg from 'img/posterDefaultImg.jpg';

const MovieMainInfo = ({movie}) => {

    
    const {original_title, vote_average, overview, genres, poster_path} = movie;
    return (
    <section>
     <ul className={css.listInfo}>
        <li className={css.listItem}>
          <img 
             src={poster_path ? `https://image.tmdb.org/t/p/original${poster_path}` : defaultImg}
             width={250} alt="poster" className={css.poster} />
        </li>
        <li className={css.listItem}>
          <h1>{original_title}</h1>
            <p>Vote average: {vote_average} </p>
          <h3>Overview</h3>
            <p>{overview}</p>
          <h3>Genres</h3>
            <ul className={css.genresList}>
            {genres.map(({id, name}) => <li className={css.genreItem} key={id} >{name}</li> )}
            </ul>
        </li>
     </ul>
     
        
    </section>
    )
}

export default MovieMainInfo;