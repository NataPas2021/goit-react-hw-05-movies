import {Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
//import css from './App.module.css';
import MovieDetails from './MovieDetails/MovieDetails';
import Cast from '../components/Cast/Cast';
import Reviews from '../components/Reviews/Reviews';
import PageNotFound from '../pages/PageNotFound';
import Menu from '../components/Menu/Menu';


export const App = () => {
  return (
    <div>
      <header>
        <nav>
          <Menu />
        </nav>
      </header>
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/movies' element= {<Movies />} />
        <Route path='/movies/:movieId' element={<MovieDetails/>} >
            <Route path='cast' element={<Cast />} />
            <Route path='reviews' element={<Reviews/>} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
};
