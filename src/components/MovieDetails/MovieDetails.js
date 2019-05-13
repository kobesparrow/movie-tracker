import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export class MovieDetails extends Component {

  handleClick = () => {
    console.log('test')
    // if (!isFavorite) {
    //   this.removeFavorite
    // } else {
    //   this.addFavorite
    // }
  }

  // addFavorite = () => {
  //   fetch(`http://localhost:3000/api/users/${this.props.user.id}/favorites`, {
  //     method: 'POST',
  //     body: JSON.stringify(
  //       title, 

  //     )
  //   })
  // }
  
  render() {
    const { title, poster_path, overview } = this.props
    const imageSource = `https://image.tmdb.org/t/p/w500/${poster_path}`
    
    return (
      <div>
        <button onClick={ this.handleClick }>Favorite</button>
        <Link to='/popular' className='back-button'>Back</Link>
        <h1>{title}</h1>
        <img src={imageSource} />
        <p>{overview}</p>
      </div>
    )
  }
}
