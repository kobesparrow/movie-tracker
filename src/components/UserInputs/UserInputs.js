import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser, logoutUserGlobally, emptyMovieState, hasErrored } from "../../actions";
import SignUp from '../SignUp/SignUp';
import Login from '../Login/Login';
import LoginSelect from '../LoginSelect/LoginSelect';

export class UserInputs extends Component {
  constructor(props) {
    super(props);
      
    this.state = {
      name: '',
      email: '',
      password: '',
      loginArea: 'initial'
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({[name]: value})
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.state.loginArea === 'login' 
      ? this.login()
      : this.signUp()
  }

  login = () => {
    this.fetchUser()
  }

  signUp = () => {
    this.addUser()
  }

  fetchUser = () => {
    fetch('http://localhost:3000/api/users', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(currentUser => this.props.loginUser(currentUser.data))
    .then(this.setState({ loginArea: 'logged in' }))
    .catch(error => this.setState({ loginArea: error.message }))
  }

  addUser = () => {
    fetch('http://localhost:3000/api/users/new', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(this.fetchUser)
    .catch(error => console.log(error.message))
  }

  // this.setState({ loginArea: error.message })

  logoutUser = (e) => {
    e.preventDefault();
    this.setState({
      name: "",
      email: "",
      password: "",
      newUser: false,
      loggedIn: false,
      loginArea: 'initial'
    });
    this.props.logoutUserGlobally();
    this.props.emptyMovieState();
  }

  userState = (status) => {
    this.setState({ loginArea: status })
  }

  renderUserArea = (status) => {
    switch (status) {
      case 'initial':
        return <LoginSelect userState={ this.userState }/>
      case 'login':
        return  <Login
                  { ...this.state }
                  userState={ this.userState }
                  handleSubmit={ this.handleSubmit }
                  handleChange={ this.handleChange }
                />
      case 'sign up':
        return  <SignUp
                  { ...this.state }
                  handleSubmit={ this.handleSubmit }
                  handleChange={ this.handleChange }
                  userState={ this.userState } 
                />
      case 'logged in':
        return  <div>
                  <p>Hello, { this.props.user.name }</p>
                  <button onClick={ this.logoutUser }>Logout</button>
                </div>;
      case 'Unexpected token < in JSON at position 0':
        return  <div>
                  <p>Password incorrect or user does not exist.</p>
                  <LoginSelect userState={this.userState} />
                </div>
      default:
        return null
    }
  }

  render() {
    return (
      <section className='user-header'>
        <img src="https://fontmeme.com/permalink/190514/42bebcf1f8bf5d7adde5bb781fba4c10.png" className='title-image' alt="retro-fonts" />
        { this.renderUserArea(this.state.loginArea) }
      </section>
    )
  }
}

export const mapPropsToState = (state) => ({
  user: state.user,
  error: state.error
})

export const mapDispatchToState = (dispatch) => ({
  loginUser: (user) => dispatch(loginUser(user)),
  hasErrored: (message) => dispatch(hasErrored(message)),
  logoutUserGlobally: () => dispatch(logoutUserGlobally()),
  emptyMovieState: () => dispatch(emptyMovieState())
});

export default connect(mapPropsToState, mapDispatchToState)(UserInputs)

