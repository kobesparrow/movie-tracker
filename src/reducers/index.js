import { combineReducers } from 'redux';
import { movieReducer, errorReducer } from './movieReducer';
import { userReducer } from './userReducer'

const rootReducer = combineReducers({
  movies: movieReducer,
  user: userReducer,
  error: errorReducer
});

export default rootReducer;