import { apiKey } from '../apikey'
import { fetchAll } from './fetchAll'

const popularFetcher = async (type) => {
  const url = 'https://api.themoviedb.org/3/movie/'
  const api = `${apiKey}`
  try {
    const response = await fetchAll(`${url}${type}${api}&language=en-US&page=1`)
    return response.results
  } catch (error) {
    console.log(error);
  }
}

export { popularFetcher }