import { apiKey } from '../apikey'
import { fetchAll } from './fetchAll'

const popularFetcher = async () => {
  const url = 'https://api.themoviedb.org/3/movie/'
  const type = 'popular?';
  try {
    const response = await fetchAll('https://api.themoviedb.org/3/movie/popular?api_key=5536a3662108dd2071304577beb32620&language=en-US&page=1')
    return response.results
  } catch (error) {
    console.log(error);
  }
}



export { popularFetcher }