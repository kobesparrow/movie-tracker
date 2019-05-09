import { combineReducers } from 'redux';
import { movieReducer } from './movieReducer';
import { userReducer } from './userReducer'

const rootReducer = combineReducers({
  movies: movieReducer,
  user: userReducer
});

export default rootReducer;