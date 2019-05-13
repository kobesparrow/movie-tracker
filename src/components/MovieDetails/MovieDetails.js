import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export class MovieDetails extends Component {
  
  // handleClick = () => {
  //   if (!this.props.favorite) {
  //     this.addFavorite()
  //   } else {
  //     this.removeFavorite()
  //   }
  // }
  
  // addFavorite = () => {
  //   console.log('test add')
  //   fetch(`http://localhost:3000/api/users/${this.props.user.id}/favorites`, {
  //     method: 'POST',
  //     body: JSON.stringify({
  //         movie_id: this.props.movie_id,
  //         title: this.props.title,
  //         user_id: this.props.user.id,
  //         poster_path: this.props.poster_path,
  //         release_date: this.props.release_date,
  //         vote_average: this.props.vote_average,
  //         overview: this.props.overview,
  //         favorite: !this.props.favorite
  //       }),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //     })
  //       .then(response => response.json())
  //       .then(result => console.log(result))
  //       .catch(error => console.log(error.message))
  //   }
    
  //   removeFavorite = () => {
  //     console.log('test remove')
  //   }
    
    render() {
    const { title, poster_path, overview } = this.props
    const imageSource = `https://image.tmdb.org/t/p/w500/${poster_path}`
    
    return (
      <div>
        {/* <button onClick={ this.handleClick }>Favorite</button> */}
        <Link to='/popular' className='back-button'>Back</Link>
        <h1>{title}</h1>
        <img src={imageSource} />
        <p>{overview}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.currentUser
})

export default connect(mapStateToProps)(MovieDetails)
