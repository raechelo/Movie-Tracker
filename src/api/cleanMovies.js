export const cleanMovies = (movies) => {
  return movies.map(movie => {
    return ({
      id: movie.id,
      title: movie.title,
      synopsis: movie.overview,
      rating: movie.vote_average,
      releaseDate: movie.release_date,
      posterImage: "https://image.tmdb.org/t/p/w185_and_h278_bestv2" + movie.poster_path,
      favorited: false
    })
  })
}