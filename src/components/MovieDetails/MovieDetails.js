import React from 'react';
import { Link } from 'react-router-dom'

export const MovieDetails = ({title, name, poster_path, overview }) => {
  const imageSource = `https://image.tmdb.org/t/p/w500/${poster_path}`

  return (
    <div>
      <Link to='/popular' className='back-button'>Back</Link>
      <h1>{title}</h1>
      <img src={imageSource} />
      <p>{overview}</p>
    </div>
  )
}
