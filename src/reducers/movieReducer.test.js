import { movieReducer, errorReducer } from './movieReducer'
import * as actions from '../actions/index'

let state = []

describe('movieReducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = movieReducer(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should empty movies when action is called', () => {
    const expected = []
    const action = actions.emptyMovieState()
    const result =  movieReducer(state, action)
    expect(result).toEqual(expected)
  })

  it('should gather favorites for that certain user', () => {
      const expected = [{name:'endgame', movie_id:1}, {name:'pokemon', movie_id:2}]
      const action = actions.displayFavorites(expected)
      const result = movieReducer(state, action)
      expect(result).toEqual(expected)
  })
  it('should gather favorites for that certain user', () => {
    const expected = [
      {
        movie_id: undefined,
        title: 'endgame',
        poster_path: 'img',
        release_date: '10/10/90',
        vote_average: 90.09,
        overview: 'movie description',
        backdrop_path: 'img2',
        favorite: false
      }, 
      {
        movie_id: undefined,
        title: 'pokemon',
        poster_path: 'img',
        release_date: '11/10/91',
        vote_average: 87.09,
        overview: 'movie description',
        backdrop_path: 'img2',
        favorite: false
      }
    ]
      const action = actions.displayMovies(expected)
      const result = movieReducer(state, action)
      expect(result).toEqual(expected)
  })

  it('should return an array of favorited movies', () => {
    const expected = []
    const action = actions.toggleFavorite(expected)
    const result = movieReducer(state, action)
    expect(result).toEqual(expected)
  })
})

describe('errorReducer', () => {

  it('should have default state', () => {
    const expected = '';
    const result = errorReducer(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should change state store of error to a message', () => {
      const state = ''
      const expected = 'Error message'
      const action  = actions.hasErrored(expected)
      const result =  errorReducer(state, action)
      expect(result).toEqual(expected)
  })
});
