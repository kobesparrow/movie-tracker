import React, { Component } from 'react';
import { fetchAll } from './api/fetchAll'
import { apiKey } from './apikey'
import { popularFetcher } from './api/genreFetcher'
import { connect } from 'react-redux'
import './App.css';
import { displayPopularMovies } from './actions';
// import TestFetchForm from 'components/TestFetchForm'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      movies: []
    }
  }

  testButton = (event) => {
    event.preventDefault()
    this.props.displayPopularMovies(this.state)
  }

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

  // getData = async () => {
  //   const url = 'https://api.themoviedb.org/3/movie/'
  //   const type = 'popular';
  //   try {
  //     const response = await fetchAll(`${url}${type}${apiKey}`)
  //     this.setState({ movies: response.results })
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  render() {
    console.log(this.props.movies[0])
    return (
      <div className="App">
        <p>Movies</p> 
        <button onClick={ this.testButton }>Test</button>
        {/* <TestFetchForm /> */}
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
