import {Route, Routes, NavLink} from 'react-router-dom';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import css from './App.module.css';
import MovieDetails from './MovieDetails/MovieDetails';
import Cast from '../components/Cast/Cast';
import Reviews from '../components/Reviews/Reviews';


export const App = () => {
  return (
    <div className={css.appContainer}>
      <nav>
        <NavLink className={css.navLink} to='/' end> Home </NavLink>
        <NavLink className={css.navLink} to='/movies'>Movies</NavLink>
      </nav>
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/movies' element= {<Movies />} />
        <Route path='/movies/:movieId' element={<MovieDetails/>} >
            <Route path='cast' element={<Cast />} />
            <Route path='reviews' element={<Reviews/>} />
        </Route>
        <Route path='*' element={<Home />} />
      </Routes>
    </div>
  );
};
