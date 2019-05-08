import React from 'react'

export default function Card({title, poster_path}) {
  return (
    <div>
      <h2>{title}</h2>
      <img src={poster_path}/>
    </div>
  )
}
