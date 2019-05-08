export const displayPopularMovies = (movie) => ({
  type: 'DISPLAY_POPULAR_MOVIES',
  movie
})

export const createUser = (email, password, name, newUser) => ({
  type: 'CREATE_USER',
  email,
  password,
  name,
  newUser
})


