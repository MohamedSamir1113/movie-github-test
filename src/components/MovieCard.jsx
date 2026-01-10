import React from 'react'

export const MovieCard = ({movie:{title,vote_average,poster_path,release_date,original_language}}) => {

  
  return (
    <div className='movie-card'>
        <img src={poster_path?`https://image.tmdb.org/t/p/w500/${poster_path}`:'/no-movie.png'} alt="" />
        <h3>{`${title} simo11`}</h3>
        <p>{vote_average}</p>
        <p>{release_date}</p>
        <p>{original_language}</p>
      
        </div>
  )
}
