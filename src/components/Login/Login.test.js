import React from 'react';
import Login from './Login';
import { shallow } from 'enzyme';

let mockState = {
    name: '',
    password: '',
    email: ''
}

let mockChange = jest.fn();
let mockSubmit = jest.fn();

describe('Login', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <Login
                {...mockState}
                handleSubmit={mockSubmit}
                handleChange={mockChange}
          />
        )
    });

    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })
});
