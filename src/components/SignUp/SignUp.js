import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../actions';
// import { dispatch } from 'redux';

export class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleChanges = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleLogin = (e) => {
    e.preventDefault();
    let endpoint = 'users'
    const init = {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch(`http://localhost:3000/api/${endpoint}`, init)
      .then(response => response.json())
      .then(currentUser => this.props.loginUser(currentUser.data))
      .catch(error => console.log(error.message))
  }

  handleNewUser = (e) => {
    e.preventDefault();
    let endpoint = 'users/new'
    const init = {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch(`http://localhost:3000/api/${endpoint}`, init)
      .then(response => response.json())
      .then(currentUser => this.props.loginUser(currentUser.data))
      .catch(error => console.log(error.message))
  }

  render() {
    const { handleChange, handleChanges } = this
    return (
      <div>
        <h4>Sign up:</h4>
        <form onSubmit={this.handleNewUser}>
          <label>
            Name
                <input
              type='text'
              name='newName'
              placeholder='Name'
              value={this.state.newName}
              onChange={handleChanges}
            />
          </label>
          <label>
            E-mail
              <input
              type='email'
              name='newEmail'
              placeholder='example@example.com...'
              value={this.state.newEmail}
              onChange={handleChanges}
            />
          </label>
          <label>
            Password
              <input
              type='password'
              name='newPassword'
              placeholder='Password'
              value={this.state.newPassword}
              onChange={handleChanges}
            />
          </label>
          <input
            type='submit'
            value='Login'
          />
        </form>
      </div>
    )
  }
}

export const mapDispatchToState = (dispatch) => ({
  loginUser: (user) => dispatch(loginUser(user))
})

export default connect(null, mapDispatchToState)(SignUp)
