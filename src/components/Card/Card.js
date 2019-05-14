import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

export class Card extends Component {
  
  render() {
    const imageSource = `https://image.tmdb.org/t/p/w500/${this.props.poster_path}`
    return (
      <Link to={`popular/${this.props.movie_id}`}>
          <img src={imageSource} alt='movie poster' className='movie-img' />
      </Link>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.currentUser
})

export default connect(mapStateToProps)(Card)




