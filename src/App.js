import React, { Component } from 'react';
import { popularFetcher } from './api/genreFetcher';
import { connect } from 'react-redux';
import './base.scss';
import { displayMovies } from './actions';
import { Route } from 'react-router-dom';
import HeaderNav from './components/HeaderNav/HeaderNav'
import DisplayArea from './containers/DisplayArea/DisplayArea'
import UserInputs from './components/UserInputs/UserInputs'
import MovieDetails from './components/MovieDetails/MovieDetails'

class App extends Component {

  componentDidMount() {
    this.getMovies('popular?')
  }

  getMovies = async (type) => {
    try {
      const movies = await popularFetcher(type)
      this.props.displayMovies(movies)
    } catch (error) {
      console.log(error.message)
    }
  }
  
  render() { 
    return (
      <div className="App">
        Hello, {this.props.user.id}
        <HeaderNav getMovies={ this.getMovies }/>
        <UserInputs />
        <Route exact path='/popular' component={DisplayArea} />
        <Route exact path='/upcoming' component={DisplayArea} />
        <Route exact path='/toprated' component={DisplayArea} />
        <Route exact path='/nowplaying' component={DisplayArea} />

        <Route path='/popular/:id' render={({ match }) => {
          const movieDescription = this.props.movies.find( movie => {
            return movie.movie_id === parseInt(match.params.id)
          })
            if(movieDescription) {
              return <MovieDetails {...movieDescription} user={this.props.user} />
            }
        }} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  movies: state.movies
})

const mapDispatchToProps = (dispatch) => ({
  displayMovies: (movies) => dispatch(displayMovies(movies))
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
