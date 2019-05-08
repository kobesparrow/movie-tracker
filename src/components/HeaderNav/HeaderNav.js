import React from 'react';
import { NavLink } from 'react-router-dom';

export default function HeaderNav() {
  return (
    <div>
      <header>
        <h1>Movie-Tracker</h1>
        <NavLink to='/popular' className='nav'>Popular</NavLink>
        <NavLink to='/upcoming' className='nav'>Upcoming</NavLink>
        <NavLink to='/toprated' className='nav'>Top Rated</NavLink>
        <NavLink to='/latest' className='nav'>Latest</NavLink>
      </header>
    </div>
  )
}


