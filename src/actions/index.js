import { popularFetcher } from '../api/genreFetcher'

export const displayPopularMovies = () => ({
  type: 'DISPLAY_POPULAR_MOVIES',
  payload: popularFetcher()
})

export const fetchMoviesBegin = () => ({
  type: 'FETCH_MOVIES_BEGIN'
});

export const fetchMoviesSucess = () => ({
  type: 'FETCH_MOVIES_SUCCESS',
  payload: { movieData }
});

export const fetchMoviesFailure = () => ({
  type: 'FETCH_PRODUCTS_FAILURE',
  payload: { error }
})

