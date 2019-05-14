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
      case 'TOGGLE_FAVORITE': 
        let newState = [...state].map(movie => {
          if (movie.movie_id === action.movieId) {
            movie.favorite = !movie.favorite
          }
          return movie
        })
        return newState
      case 'DISPLAY_FAVORITES':
        return action.favorites
      case 'EMPTY_MOVIES':
        return []
    default:
      return state
  }
}