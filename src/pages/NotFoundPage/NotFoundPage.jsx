import css from './NotFoundPage.module.css';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
     <div>
        <h1>Oops, page not found.</h1>
        <Link to='/' className={css.link}>Back home</Link>
     </div>
    )
}

export default NotFoundPage