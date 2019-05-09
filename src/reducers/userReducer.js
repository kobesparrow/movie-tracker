export const userReducer = (state = {}, action) => {
  switch(action.type) {
    case 'LOGIN_USER':
      return action.currentUser
    default:
      return state
  }    
}