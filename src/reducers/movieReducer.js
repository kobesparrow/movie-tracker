export const movieReducer = ( state=[], action) => {
  switch(action.type) {
    case 'DISPLAY_POPULAR_MOVIES':
      return console.log('test')
    default:
      return state
  }
}