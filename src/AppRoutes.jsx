import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import SharedLayout from 'components/SharedLayout/SharedLayout';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('pages/MovieDetailsPage/MovieDetailsPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));
const MovieCastPage = lazy(() => import('pages/MoviesCastPage/MovieCastPage'));
const MoviesReviewsPage = lazy(() => import('pages/MoviesReviewsPage/MoviesReviewsPage')) ;

const AppRoutes = () => {
    return (
     <>
      <Routes>
       <Route path='/' element={<SharedLayout/>} >
          <Route index element={<HomePage/>}/>
          <Route path='goit-react-hw-05-movies' element={<HomePage />}/> 
          <Route path='movies' element={<MoviesPage/>} />
          <Route path='movies/:movieId' element={<MovieDetailsPage/>} >
            <Route path='cast' element={<MovieCastPage />} />
            <Route path='reviews' element={<MoviesReviewsPage/>}/>
          </Route>
          <Route path='*' element={<NotFoundPage/>}/>
       </Route> 
      </Routes>
     </>
    )
}

export default AppRoutes;