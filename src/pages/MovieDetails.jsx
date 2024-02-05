import {Link, Outlet} from 'react-router-dom';

export const MovieDetails = () => {
    return (
        <div>
            <ul>
                <li>
                   <Link to='cast'></Link>
                </li>
                <li>
                   <Link to='reviews'></Link>
                </li>
            </ul>
            <Outlet />
        </div>
    )
}