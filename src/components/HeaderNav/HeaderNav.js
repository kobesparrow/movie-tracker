import React from 'react';
import { NavLink } from 'react-router-dom';


export default function HeaderNav() {
  return (
    <div>
        <h1>Movie Tracker</h1>
      <section className="header-section">
        <header>
          <NavLink to='/popular' className='nav'>Popular</NavLink>
          <NavLink to='/upcoming' className='nav'>Upcoming</NavLink>
          <NavLink to='/toprated' className='nav'>Top Rated</NavLink>
          <NavLink to='/latest' className='nav'>Latest</NavLink>
        </header>
      </section>
    </div>
  )
}




