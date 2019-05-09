import React, { Component } from 'react';
import { popularFetcher } from './api/genreFetcher';
import { connect } from 'react-redux';
import './base.scss';
import { displayPopularMovies } from './actions';
import HeaderNav from './components/HeaderNav/HeaderNav'
import DisplayArea from './containers/DisplayArea/DisplayArea'
import UserInputs from './components/UserInputs/UserInputs'

class App extends Component {

  componentDidMount() {
    this.getMovies()
  }

  getMovies = async () => {
    try {
      const movies = await popularFetcher()
      this.props.displayPopularMovies(movies)
    } catch (error) {
      console.log(error)
    }
  }
  
  render() {
    console.log(this.props.movies)
    return (
      <div className="App">
        <HeaderNav />
        <UserInputs />
        <DisplayArea />
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
