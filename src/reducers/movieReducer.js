export const movieReducer = ( state=[], action) => {
  switch(action.type) {
    case 'DISPLAY_MOVIES':
      return action.movies.map(movie => {
        return {
          title: movie.title,
          poster_path: movie.poster_path,
          id: movie.id,
          overview: movie.overview,
          favorite: false}
      })
    default:
      return state
  }
}