import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleFavorite } from '../../actions';
import favorite from '../../images/popcorn-favorite.svg'
import notFavorite from '../../images/popcorn.svg'
import leftArrow from '../../images/left-arrow.svg'

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
        backdrop_path: this.props.backdrop_path,
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
    }
    
    render() {
    const { title, overview, backdrop_path } = this.props
    const imageSource = `https://image.tmdb.org/t/p/w1280/${backdrop_path}`;
    let favoriteIcon
    if (this.props.favorite) {
      favoriteIcon = <img src={favorite} className="favorited-icon" alt="favorite-icon" />
    } else {
      favoriteIcon = <img src={notFavorite} className="not-favorited-icon" alt="favorite-icon" />
    }
    
    return (
      <article className="movie-details">
        <div className="movie-details-main-info">
          <div className="image-holder">
            <img
              src={imageSource}
              className="details-header-image"
              alt="movie poster"
            />
          </div>
          <div className="movie-details-header">
            <h3>{title}</h3>
            <span className="movie-details-subheader">Overview:</span>
            <p>{overview}</p>
            <div className="favorite-button-div">
              <span className="movie-details-subheader">Favorite:</span>
              <button onClick={this.handleClick}>{favoriteIcon}</button>
            </div>
          </div>
        </div>
        <div className="back-button-div">
          <Link to="/popular" className="back-button">
            <img
              src={leftArrow}
              className="left-arrow"
              alt="back button icon"
            />{" "}
            BACK
          </Link>
        </div>
      </article>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToState = (dispatch) => ({
  toggleFavorite: (movieId) => dispatch(toggleFavorite(movieId))
})

export default connect(mapStateToProps, mapDispatchToState)(MovieDetails)
