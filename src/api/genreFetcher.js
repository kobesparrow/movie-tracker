import { apiKey } from '../apikey'
import { fetchAll } from './fetchAll'

const popularFetcher = async () => {
  const url = 'https://api.themoviedb.org/3/movie/'
  const type = 'popular';
  try {
    const response = await fetchAll(`${url}${type}${apiKey}`)
    return response.results
  } catch (error) {
    console.log(error);
  }
}



export { popularFetcher }