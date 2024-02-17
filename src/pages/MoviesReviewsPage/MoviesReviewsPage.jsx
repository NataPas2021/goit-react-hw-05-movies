import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewsById } from "api";

const MoviesReviewsPage = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const {movieId} = useParams();

    useEffect(() => {
        const fetchReviews = async() => {
            try{
                setLoading(true);
                const data = await fetchReviewsById(movieId);
                setReviews(data);
                
            } catch(error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchReviews();
    }, [movieId])

    const elements = reviews.map(({id, author_details, content}) => (
          <li key={id}>
             <h4>{author_details.username}</h4>
             <p>{content}</p>
          </li>
    ))

    return (
        <>
        {loading && <p>...Loading</p>}
        {error && <p>{error}</p>}
        {reviews.length > 0 ? (<ol>
                   {elements}
                 </ol>) : 'There is no reviews yet, sorry'}
        </>
    )
}

export default MoviesReviewsPage;