import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

export class Card extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const imageSource = `https://image.tmdb.org/t/p/w500/${this.props.poster_path}`
    return (
      <Link to={`popular/${this.props.id}`}>
          <img src={imageSource} className='movie-img' />
      </Link>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.currentUser
})

export default connect(mapStateToProps)(Card)




