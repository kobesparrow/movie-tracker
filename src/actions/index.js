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

export const loginUser = (currentUser) => ({
  type: 'LOGIN_USER',
  currentUser
})

export const addUser = (newUser) => ({
  type: 'ADD_USER',
  newUser
})


