import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleFavorite } from '../../actions';

export class MovieDetails extends Component {
  
  handleClick = () => {
    if (!this.props.favorite) {
      this.addFavorite()
    } else {
      this.removeFavorite()
    }
  }
  
  addFavorite = () => {
    fetch('http://localhost:3000/api/users/favorites/new', {
      method: "POST",
      body: JSON.stringify({
        movie_id: this.props.movie_id,
        title: this.props.title,
        user_id: this.props.user.id,
        poster_path: this.props.poster_path,
        release_date: this.props.release_date,
        vote_average: this.props.vote_average,
        overview: this.props.overview,
        favorite: true
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .catch(error => console.log(error.message));
    this.props.toggleFavorite(this.props.movie_id);
    }
    removeFavorite = () => {
      const user_id = this.props.user.id;
      const movie_id = this.props.movie_id;
      fetch(`http://localhost:3000/api/users/${user_id}/favorites/${movie_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => response.json())
        .catch(error => console.log(error.message))
      this.props.toggleFavorite(this.props.movie_id); 
      console.log('test remove')
    }
    
    render() {
    const { title, poster_path, overview } = this.props
    const imageSource = `https://image.tmdb.org/t/p/w500/${poster_path}`
    
    return (
      <div>
        <button onClick={ this.handleClick }>Favorite</button>
        <Link to='/popular' className='back-button'>Back</Link>
        <h1>{title}</h1>
        <img src={imageSource} alt='movie poster' />
        <p>{overview}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToState = (dispatch) => ({
  toggleFavorite: (movieId) => dispatch(toggleFavorite(movieId))
})

export default connect(mapStateToProps, mapDispatchToState)(MovieDetails)
