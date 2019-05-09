import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../actions';
// import { dispatch } from 'redux';

export class UserInputs extends Component {
  constructor(props) {
      super(props);
      this.state = {
          newName: '',
          newEmail: '',
          newPassword: '',
          name: '',
          email: '',
          password: ''
      }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({[name]: value})
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
        <h4>Login:</h4>
        <form onSubmit={ this.handleLogin }>
          <label>
              E-mail
              <input
                  type='email'
                  name='email'
                  placeholder='example@example.com...'
                  value={this.state.email}
                  onChange={handleChange}
              />
          </label>
          <label>
              Password
              <input
                  type='password'
                  name='password'
                  placeholder='Password'
                  value={this.state.password}
                  onChange={handleChange}
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

export default connect(null, mapDispatchToState)(UserInputs)
