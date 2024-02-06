import {Link} from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div>
         <h1>Unfortunately, we can not find this page.</h1>
         <Link to='/'>To Home Page</Link>
        </div>

    )
}

export default PageNotFound;