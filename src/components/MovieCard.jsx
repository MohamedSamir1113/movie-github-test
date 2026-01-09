import React from 'react'

export const MovieCard = ({movie:{title,vote_average,poster_path,release_date,original_language}}) => {
console.log("simo is modyfying here");
console.log("yo hi there");

  console.log("this is coming from dev-simo");
  
  return (
    <div className='movie-card'>
        <img src={poster_path?`https://image.tmdb.org/t/p/w500/${poster_path}`:'/no-movie.png'} alt="" />
        <h3>{`${title} simo`}</h3>
        <p>{vote_average}</p>
        <p>{release_date}</p>
        <p>{original_language}</p>
      
        </div>
  )
}
