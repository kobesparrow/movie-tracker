import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../components/Card/Card';

class DisplayArea extends Component {

  render() {
    const moviesArray = this.props.movies.map( movie => {
      return <Card {...movie} key={movie.movie_id} />
    })

    return (
      <div className='display-area'>
        {moviesArray}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies
})



export default connect(mapStateToProps)(DisplayArea)
