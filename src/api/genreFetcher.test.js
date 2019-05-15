import {popularFetcher} from './genreFetcher';
import { fetchAll } from './fetchAll'
import { apiKey } from '../apikey'

describe('popularFetcher', () => {
    let mockData;
    let mockUrl; 
    let mockType;
    let mockApi;

    beforeEach(() => {
        mockUrl = 'https://api.themoviedb.org/3/movie/'
        mockApi = `${apiKey}`
        mockType = 'popular?'
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

    it('should see if popularFetch is called with the right params', async () => {
        popularFetcher(mockType)
        await fetchAll(`${mockUrl}${mockType}${mockApi}&language=en-US&page=1`)
        expect(fetch).toHaveBeenCalledWith(`${mockUrl}${mockType}${mockApi}&language=en-US&page=1`)
    });
});