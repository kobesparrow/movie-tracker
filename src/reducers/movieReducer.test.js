import { movieReducer } from './movieReducer'
import * as actions from '../actions/index'

describe('movieReducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = movieReducer(undefined, {})
    expect(result).toEqual(expected)
  })
})