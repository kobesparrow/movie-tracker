import { loginUser, logoutUserGlobally } from '../actions/index';
import { userReducer } from './userReducer';

describe('userReducer', () => {

    it('should have default state', ()=> {
        const expected = {}
        const result = userReducer(undefined, {})
        expect(result).toEqual(expected)
    });

    it('should save the user to login', () => {
        const expected = {name: 'bob', id:1}
        const action = loginUser(expected)
        const state = {}
        const result = userReducer(state, action)
        expect(result).toEqual(expected)
    })

    it('should clear out user from login', () => {
        const expected = {}
        const action = logoutUserGlobally()
        const state = {}
        const result = userReducer(state, action)
        expect(result).toEqual(expected)
    })
})