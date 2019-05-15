import {popularFetcher} from './genreFetcher';

describe('popularFetcher', () => {
    let mockData;

    beforeEach(() => {
        mockData = {
            movieContainer: 'Popular',
            results: [
                {movie: 'endgame'},
                {movie: 'pokemon'}
            ]
        }

        fetch = jest.fn().mockImplementation(() => Promise.resolve ( {
            ok: true,
            json: () => Promise.resolve(mockData)
        }))
    });
});