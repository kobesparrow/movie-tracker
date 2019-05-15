import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';

const mockMovie = {name: 'endgame', id: 123}

describe('Card', () => {
    let wrapper;


    beforeEach(() => {
        wrapper = shallow(
            <Card {...mockMovie} key={mockMovie.id} />
        )
    });

    it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    });
})