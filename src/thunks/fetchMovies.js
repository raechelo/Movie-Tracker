import { fetchData } from '../utils/api/fetchData';
import { cleanMovies } from '../utils/api/cleanMovies';

import { isLoading, hasErrored, setMovies } from '../actions';

export const fetchMovies = (url) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true));
      const data = await fetchData(url);
      const movies = cleanMovies(data.results)
      dispatch(isLoading(false));
      dispatch(setMovies(movies));
    } catch (error) {
      dispatch(hasErrored(error.message));
    }
  }
}