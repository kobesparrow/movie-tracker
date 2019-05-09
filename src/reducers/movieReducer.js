export const movieReducer = ( state=[], action) => {
  switch(action.type) {
    case 'DISPLAY_POPULAR_MOVIES':
      return action.movies
    default:
      return state
  }
}