import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


export default class HeaderNav extends Component {

  render() {
    return (
      <div>
          {/* <h1>Movie Tracker</h1> */}
        <section className="header-section">
          <header>
            <NavLink to='/popular' onClick={ () => this.props.getMovies('popular?') } className='nav'>Popular</NavLink>
            <NavLink to='/upcoming' onClick={ () => this.props.getMovies('upcoming?') } className='nav'>Upcoming</NavLink>
            <NavLink to='/toprated' onClick={ () => this.props.getMovies('top_rated?') } className='nav'>Top Rated</NavLink>
            <NavLink to='/nowplaying' onClick={ () => this.props.getMovies('now_playing?') } className='nav'>Now Playing</NavLink>
            <NavLink to='/favorites' onClick={ () => this.props.getFavorites(this.props.userId) } className='nav'>Favorites</NavLink>
          </header>
        </section>
      </div>
    )
  }
}



