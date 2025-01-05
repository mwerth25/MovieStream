import React from 'react'
import { useParams } from 'react-router-dom'

function MovieDetails() {
  const { id } = useParams()

  return (
    <div className="movie-details">
      <h1>Movie Details</h1>
      <p>Movie ID: {id}</p>
    </div>
  )
}

export default MovieDetails 