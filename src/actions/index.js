export const displayMovie = () => ({
  type: 'DISPLAY_INITIAL_MOVIES'
})

export const fetchMoviesBegin = () => ({
  type: 'FETCH_MOVIES_BEGIN'
});

export const fetchMoviesSucess = () => ({
  type: 'FETCH_MOVIES_SUCCESS'
  payload: { movieData }
});

export const fetchMoviesFailure = () => ({
  type: 'FETCH_PRODUCTS_FAILURE'
  payload: { error }
})

