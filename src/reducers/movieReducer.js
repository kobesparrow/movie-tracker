export const movieReducer = ( state=[], action) => {
  switch(action.type) {
    case 'DISPLAY_POPULAR_MOVIES':
    console.log(action.movie)
      return state = action.movie
    default:
      return state
  }
}