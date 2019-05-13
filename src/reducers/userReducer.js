export const userReducer = (state = {}, action) => {
  switch(action.type) {
    case 'LOGIN_USER':
      return action.currentUser;
    case 'ADD_USER':
      return console.log(action.newUser)
      // return action.newUser;
    case 'FAVORITE_MOVIE':
      let newFavorite = action.id
      return {...state, favorites: [...state.favorites, newFavorite]} 
    default:
      return state
  }    
}