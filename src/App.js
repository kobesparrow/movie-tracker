import React, { Component } from 'react';
import { fetchAll } from './api/fetchAll'
import { apiKey } from './apikey'
import { popularFetcher } from './api/genreFetcher'
import './App.css';
import { displayPopularMovies } from './actions';
// import TestFetchForm from 'components/TestFetchForm'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      movies: ['Mahk', 'Duy']
    }
  }

  testButton = (event) => {
    event.preventDefault()
    displayPopularMovies()
  }

  componentDidMount() {
    // displayPopularMovies()
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
    return (
      <div className="App">
        <p>Movies</p> 
        <button onClick={ this.testButton }>Test</button>
        {/* <TestFetchForm /> */}
      </div>
    );
  }
}

export default App;
