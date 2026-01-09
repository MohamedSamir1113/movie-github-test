import React from 'react'

export const MovieCard = ({movie:{title,vote_average,poster_path,release_date,original_language}}) => {
console.log("dev-jsm is modyfying here");
console.log("yo hi there");

  return (
    <div className='movie-card'>
        <img src={poster_path?`https://image.tmdb.org/t/p/w500/${poster_path}`:'/no-movie.png'} alt="" />
        <h3>{title}</h3>
        <p>{vote_average}</p>
      
        </div>
  )
}
