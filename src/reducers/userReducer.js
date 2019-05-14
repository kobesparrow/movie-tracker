export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return action.currentUser;
    case "ADD_USER":
      return action.newUser;
    default:
      return state;
  }    
}