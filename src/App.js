import React, { Component } from 'react';
import { popularFetcher } from './api/genreFetcher';
import { connect } from 'react-redux';
import './base.scss';
import { displayPopularMovies } from './actions';
import { Route } from 'react-router-dom';
import HeaderNav from './components/HeaderNav/HeaderNav'
import DisplayArea from './Containers/DisplayArea/DisplayArea'
import UserInputs from './components/UserInputs/UserInputs'
import {MovieDetails} from './components/MovieDetails/MovieDetails'

class App extends Component {

  componentDidMount() {
    this.getMovies('popular?')
  }

  getMovies = async (type) => {
    console.log(type)
    try {
      const movies = await popularFetcher(type)
      this.props.displayPopularMovies(movies)
    } catch (error) {
      console.log(error.message)
    }
  }
  
  render() { 
    console.log(this.props.movies)
    return (
      <div className="App">
        <HeaderNav getMovies={ this.getMovies }/>
        <UserInputs />
        <Route exact path='/popular' component={DisplayArea} />
        <Route exact path='/upcoming' component={DisplayArea} />
        <Route exact path='/toprated' component={DisplayArea} />
        <Route exact path='/nowplaying' component={DisplayArea} />

        <Route path='/popular/:id' render={({ match }) => {
          const movieDescription = this.props.movies.find( movie => {
            return movie.id === parseInt(match.params.id)
          })
            if(movieDescription) {
              return <MovieDetails {...movieDescription} />
            }
        }} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies
})

const mapDispatchToProps = (dispatch) => ({
  displayPopularMovies: (movies) => dispatch(displayPopularMovies(movies))
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
