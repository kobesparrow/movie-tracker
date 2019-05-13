export const movieReducer = ( state=[], action) => {
  switch(action.type) {
    case 'DISPLAY_MOVIES':
      return action.movies.map(movie => {
        return {
          movie_id: movie.id,
          title: movie.title,
          poster_path: movie.poster_path,
          release_date: movie.release_date,
          vote_average: movie.vote_average,
          overview: movie.overview,
          favorite: false}
      })
    default:
      return state
  }
}