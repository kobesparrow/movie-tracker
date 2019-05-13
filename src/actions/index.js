export const displayPopularMovies = (movies) => ({
  type: 'DISPLAY_POPULAR_MOVIES',
  movies
})

export const loginUser = (currentUser) => ({
  type: 'LOGIN_USER',
  currentUser
})

export const addUser = (newUser) => ({
  type: 'ADD_USER',
  newUser
})


