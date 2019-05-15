export const displayMovies = (movies) => ({
  type: 'DISPLAY_MOVIES',
  movies
})

export const toggleFavorite = (movieId) => ({
  type: 'TOGGLE_FAVORITE',
  movieId
})

export const displayFavorites = (favorites) => ({
  type: 'DISPLAY_FAVORITES',
  favorites
})

export const emptyMovieState = () => ({
  type: 'EMPTY_MOVIES'
})

export const loginUser = (currentUser) => ({
  type: 'LOGIN_USER',
  currentUser
})

export const addUser = (newUser) => ({
  type: 'ADD_USER',
  newUser
})

export const logoutUserGlobally = () => ({
  type: 'LOGOUT_USER'
})

export const hasErrored = (message) => ({
  type: 'HAS_ERRORED',
  message
})






