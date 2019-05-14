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
          newUser: false,
          loggedIn: false,
      }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({[name]: value})
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.newUser) {
      this.addUser();
      console.log(this.state.user)
      this.setState({ loggedIn: true });
    } else {
      this.fetchUser();
      this.setState({ loggedIn: true });
    }
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
      .then(this.fetchUser())
      // .then(this.fetchUser())
      .then(this.setState({ newUser: false }))
      .catch(error => console.log(error.message))
  }

  logoutUser = (e) => {
    e.preventDefault();
    this.setState({
      name: "",
      email: "",
      password: "",
      newUser: false,
      loggedIn: false
    });
  }

  toggleNewUser = (e) => {
    e.preventDefault();
    this.setState({ newUser: !this.state.newUser })
  }

  render() {
    const { handleSubmit, handleChange } = this
    let loginArea
    if (this.state.loggedIn) {
      loginArea = 
        <div>
          Hello, {this.props.user.name}
          <button onClick={ this.logoutUser }>Logout</button>
        </div>;
    } else if (this.state.newUser) {
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
      loginArea = (
        <div>
          <Login
            {...this.state}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
          />
          <button
            onClick={this.toggleNewUser}
            className="switch-button"
          >
            createUser
          </button>
        </div>
      );
    }

    return (
      <div>
        { loginArea }
      </div>
    )
  }
}

export const mapPropsToState = (state) => ({
  user: state.user
})

export const mapDispatchToState = (dispatch) => ({
  loginUser: (user) => dispatch(loginUser(user)),
  addUser: (user) => dispatch(addUser(user))
})

export default connect(mapPropsToState, mapDispatchToState)(UserInputs)
