import key from '../utils/apikey';
import { fetchData } from './fetchData';
import { cleanMovies } from './cleanMovies';

export const fetchMovies = async () => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=27`
  const parsedResponse = await fetchData(url);
  console.log(parsedResponse)
  return cleanMovies(parsedResponse.results);
}