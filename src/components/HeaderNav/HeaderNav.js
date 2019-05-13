import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { displayPopularMovies } from '../../actions';
import { connect } from 'react-redux';

class HeaderNav extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
          <h1>Movie Tracker</h1>
        <section className="header-section">
          <header>
            <NavLink to='/popular' onClick={ () => this.props.getMovies('popular?') } className='nav'>Popular</NavLink>
            <NavLink to='/upcoming' onClick={ () => this.props.getMovies('upcoming?') } className='nav'>Upcoming</NavLink>
            <NavLink to='/toprated' onClick={ () => this.props.getMovies('top_rated?') } className='nav'>Top Rated</NavLink>
            <NavLink to='/latest' onClick={ () => this.props.getMovies('latest?') } className='nav'>Latest</NavLink>
          </header>
        </section>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  displayPopularMovies: (movies) => dispatch(displayPopularMovies(movies))
})

export default connect(null, mapDispatchToProps)(HeaderNav);


