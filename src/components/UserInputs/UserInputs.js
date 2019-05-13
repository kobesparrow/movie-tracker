import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser, addUser } from '../../actions';
import SignUp from '../SignUp/SignUp';
import Login from '../Login/Login'
// import { dispatch } from 'redux';

export class UserInputs extends Component {
  constructor(props) {
      super(props);
      this.state = {
          name: '',
          email: '',
          password: '',
          newUser: false
      }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({[name]: value})
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.newUser) {
      this.addUser()
    } else {
      this.fetchUser()
    }
  }

  fetchUser = () => {
    // try {
    //   const response = await fetch('http://localhost:3000/api/users', {
    //     method: 'POST',
    //     body: JSON.stringify(this.state),
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   })
    //   return response.results
    // } catch (error) {
    //   console.log(error)
    // }
    fetch('http://localhost:3000/api/users', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(currentUser => this.props.loginUser(currentUser.data))
      .catch(error => console.log(error.message))
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
      .then(newUser => this.props.addUser(newUser))
      .catch(error => console.log(error.message))
  }

  toggleNewUser = (e) => {
    e.preventDefault();
    this.setState({ newUser: !this.state.newUser })
  }

  render() {
    const { handleSubmit, handleChange } = this
    let loginArea
    if (this.state.newUser) {
      loginArea = 
        <div>
          <SignUp
            {...this.state}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
          />
          <button onClick={ this.toggleNewUser } className='switch-button'>Or login</button>
        </div> 
    } else {
      loginArea = 
        <div>
          <Login
            {...this.state}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
          />
        <button onClick={ this.toggleNewUser } className='switch-button'>createUser</button>
        </div>
    }

    return (
      <div>
        { loginArea }
      </div>
    )
  }
}

export const mapDispatchToState = (dispatch) => ({
  loginUser: (user) => dispatch(loginUser(user)),
  addUser: (user) => dispatch(addUser(user))
})

export default connect(null, mapDispatchToState)(UserInputs)
