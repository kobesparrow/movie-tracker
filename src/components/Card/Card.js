import React from 'react'

export default function Card({title, poster_path}) {
  const imageSource = `https://image.tmdb.org/t/p/w500/${poster_path}`

  return (
    <div className='movie-card'>
      <h2>{title}</h2>
      <img src={imageSource} className='movie-img' />
   </div>
  )
}
