import * as actions from './index';

describe('actions', () => {
  it('should create an action object with type DISPLAY_MOVIES', () => {
    //setup
    const movies = [{}, {}]
    const expected = {type: 'DISPLAY_MOVIES', movies }
    //execution
    const result = actions.displayMovies(movies)
    //expectation
    expect(result).toEqual(expected)
  });

  it("should create an action object with type TOGGLE_FAVORITE", () => {
    //setup
    const movieId = 2408;
    const expected = { type: "TOGGLE_FAVORITE", movieId };
    //execution
    const result = actions.toggleFavorite(movieId);
    //expectation
    expect(result).toEqual(expected);
  });

  it("should create an action object with type DISPLAY_FAVORITES", () => {
    //setup
    const movieId = 12;
    const expected = { type: "TOGGLE_FAVORITE", movieId };
    //execution
    const result = actions.toggleFavorite(movieId);
    //expectation
    expect(result).toEqual(expected);
  });

  it('should create an action object with type LOGIN_USER', () => {
    //setup
    const currentUser = {email: 'carl@email.com', password: 'password'};
    const expected = {type: 'LOGIN_USER', currentUser}
    //execution
    const result = actions.loginUser(currentUser)
    //expectation
    expect(result).toEqual(expected)
  })

  it("should create an action object with type ADD_USER", () => {
    //setup
    const newUser = { name: "Carl", email: "carl@email.com", password: "password" };
    const expected = { type: "ADD_USER", newUser };
    //execution
    const result = actions.addUser(newUser);
    //expectation
    expect(result).toEqual(expected);
  });

  it('should empty the state when action logoutUserGlobally is called', () => {
    const expected = {type: 'LOGOUT_USER'}
    const result = actions.logoutUserGlobally()
    expect(result).toEqual(expected)
  });

  it('should empty movies when emptyMoviesState is called', () => {
    const expected = {type: 'EMPTY_MOVIES'}
    const result = actions.emptyMovieState()
    expect(result).toEqual(expected)
  });

  it('should create an error message in store when hasErrored is called', () => {
    const message = 'Failed'
    const expected = {type: 'HAS_ERRORED', message}
    const result = actions.hasErrored(message)
    expect(result).toEqual(expected)
  });
})
