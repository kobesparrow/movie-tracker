import * as actions from './index';

describe('actions', () => {
  it('should create an action object with type DISPLAY_POPULAR_MOVIES', () => {
    //setup
    const movies = [{}, {}]
    const expected = {type: 'DISPLAY_POPULAR_MOVIES', movies }
    //execution
    const result = actions.displayPopularMovies(movies)
    //expectation
    expect(result).toEqual(expected)
  });

  it('should create an action object with type LOGIN_USER', () => {
    //setup
    const user = {name: 'Carl', email: 'carl@email.com', password: 'password'};
    const expected = {type: 'LOGIN_USER', user}
    //execution
    const result = actions.loginUser(user)
    //expectation
    expect(result).toEqual(expected)
  })
})
