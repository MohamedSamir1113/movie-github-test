import React from 'react'

export const MovieCard = ({movie:{title,vote_average,poster_path,release_date,original_language}}) => {

  console.log("this is coming from dev-adrian");
  
  return (
    <div className='movie-card'>
        <img src={poster_path?`https://image.tmdb.org/t/p/w500/${poster_path}`:'/no-movie.png'} alt="" />
        <h3>{title}</h3>
        <p>{vote_average}</p>
        <p>{release_date}</p>
      
        </div>
  )
}
