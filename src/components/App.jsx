import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { SharedLayout } from './SharedLayout';
// import { Home } from '../pages/Home';
// import { Movies } from '../pages/Movies';
// import { MovieDetails } from '../pages/MovieDetails';
// import { Cast } from './Cast';
// import { Reviews } from './Reviews';
// import { NotFound } from '../pages/NotFound';

// const SharedLayout = lazy(() => import('./SharedLayout'));
const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));
const NotFound = lazy(() => import('../pages/NotFound'));

export const App = () => {
  const handleFetching = async api => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkY2E4ZTVkNTEwMGVlMTY0NjAzNDc2OTI0Y2I4ZWQ0ZCIsInN1YiI6IjY2NThiNWYzOThmZjNmM2VlNDZjMmM3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NmCaSXxa__DiB0BE8KsVx4m1TmznsDwPZtXHtz8ihko',
      },
    };

    try {
      const response = await fetch(api, options);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home handleFetching={handleFetching} />} />
        <Route
          path="/movies"
          element={<Movies handleFetching={handleFetching} />}
        />
        <Route
          path="/movies/:movieId"
          element={<MovieDetails handleFetching={handleFetching} />}
        >
          <Route
            path="cast"
            element={<Cast handleFetching={handleFetching} />}
          />
          <Route
            path="reviews"
            element={<Reviews handleFetching={handleFetching} />}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};