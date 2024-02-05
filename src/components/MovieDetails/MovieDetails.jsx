import { useParams} from 'react-router-dom';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews'

const MovieDetails = () => {
    const {movieId} = useParams();
    return (
        <div>
          <Cast id={movieId}/>
          <Reviews />
        </div>
        
    ) 
}

export default MovieDetails; 