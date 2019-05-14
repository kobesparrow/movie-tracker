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
    const favorites = [{}, {}];
    const expected = { type: "TOGGLE_FAVORITE", favorites };
    //execution
    const result = actions.toggleFavorite(favorites);
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
})
