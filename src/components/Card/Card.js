import React from 'react';
import { Link } from 'react-router-dom'

export default function Card({title, poster_path, id}) {
  const imageSource = `https://image.tmdb.org/t/p/w500/${poster_path}`

  return (
    <Link to={`popular/${id}`}>
        <img src={imageSource} className='movie-img' />
    </Link>
  )
}
