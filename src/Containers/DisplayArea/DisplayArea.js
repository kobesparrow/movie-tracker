import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../components/Card/Card';

class DisplayArea extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    console.log(this.props.user)
    const moviesArray = this.props.movies.map( movie => {
      return <Card {...movie} key={movie.id} />
    })

    return (
      <div className='display-area'>
        {moviesArray}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies,
  user: state.currentUser
})



export default connect(mapStateToProps)(DisplayArea)
