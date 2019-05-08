import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../components/Card/Card';
import { displayPopularMovies } from '../../actions'

class DisplayArea extends Component {
  constructor(props) {
    super(props);
    
  }

  
  render() {
    const moviesArray = this.props.movies.map( movie => <Card {...movie}/>)
    return (
      <div>
        {moviesArray}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies
})



export default connect(mapStateToProps)(DisplayArea)
