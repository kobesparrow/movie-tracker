import {fetchAll} from './fetchAll';

describe('fetchAll', () => {
    let mockData;
    let fetchMock;

    beforeEach(() => {
        mockData = {
            movieContainer: 'Popular',
            results: [
                {movie: 'endgame'},
                {movie: 'pokemon'}
            ]
        }

        fetch = jest.fn().mockImplementation(() => Promise.resolve ({
            ok: true,
            json: () => Promise.resolve(mockData)
        }));
    });

    it('should call fetchAll with correct params', () => {
        const url = 'www.movieDB.com'
        fetchAll(url)
        expect(fetch).toHaveBeenCalledWith(url)
    })

    it('should show an error if response is not ok', () => {
        const url = 'www.movieDB.com'
        fetchAll(url)
            .catch(error => {
                expect(error.message).toBe('Response is not ok')
            })
    })
})