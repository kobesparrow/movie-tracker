export const displayMovies = (movies) => ({
  type: 'DISPLAY_MOVIES',
  movies
})

export const favoriteMovie = (id) => ({
  type: 'FAVORITE_MOVIE',
  id
})

export const loginUser = (currentUser) => ({
  type: 'LOGIN_USER',
  currentUser
})

export const addUser = (newUser) => ({
  type: 'ADD_USER',
  newUser
})


