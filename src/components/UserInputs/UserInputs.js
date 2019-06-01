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
      newUser: false,
      loggedIn: false,
      loginArea: 'initial'
      // errorMessage: ''
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


    // if (this.state.newUser) {
    //   this.props.hasErrored('')
    //   this.addUser();
    //   this.setState({ loggedIn: true });
    // } else {
    //   this.props.hasErrored('')
    //   this.fetchUser();
    //   this.setState({ loggedIn: true });
    // }
  }

  login = () => {
    this.fetchUser()
    // await this.setState({ loginArea: 'logged in'});
  }

  signUp = () => {
    this.addUser()
    // await this.login()
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
      .catch(error => console.log(error.message))
  }

  // this.setState({ loginArea: error. }

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
      // .then(this.setState({ loginArea: 'logged in' }))
      .catch(error => this.props.hasErrored(error.message))
  }

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

  toggleNewUser = (e) => {
    e.preventDefault();
    this.props.hasErrored('')
    this.setState({ newUser: !this.state.newUser })
  }

  // showLogin = () => {
  //   console.log('test') 
  //   loginArea =
  //     <div className='user-inputs'>
  //       <Login
  //         {...this.state}
  //         handleSubmit={handleSubmit}
  //         handleChange={handleChange}
  //       />
  //       <button
  //         onClick={this.toggleNewUser}
  //       // className="switch-button"
  //       >
  //         createUser
  //         </button>
  //     </div>
  // }

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
                  <button onClick={this.logoutUser}>Logout</button>
                </div>;
      default:
        return console.log('default')
    }
  }


  render() {
    const { handleSubmit, handleChange } = this
    let loginArea

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let today = new Date();
    var date = (months[today.getMonth()]) + ' ' + today.getDate() + ', ' + today.getFullYear()


    if (this.props.error.length > 0 && this.state.loggedIn) {
      loginArea = (
        <div>
          <p>User Does not exist try again or create new user</p>
          <Login
            {...this.state}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
          />
          <button onClick={this.toggleNewUser}>Create User</button>
        </div>
      )
    } else if (this.state.newUser) {
      loginArea = 
        <div className='user-inputs'>
          <SignUp
            {...this.state}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
          />
          <button onClick={ this.toggleNewUser } className='switch-button'>Or login</button>
        </div> 
    } else if (this.state.loggedIn && this.props.error.length === 0) {
      loginArea = 
        <div>
          Hello, {this.props.user.name}
          <button onClick={ this.logoutUser }>Logout</button>
        </div>;
    }else if (!this.state.loggedIn) {

    }
    
    
    /////////////////RETURN, BITCHES!!!!!!!!!!!!//////////////////////////////
    return (
      <div className='user-header'>
        <img src="https://fontmeme.com/permalink/190514/42bebcf1f8bf5d7adde5bb781fba4c10.png" className='title-image' alt="retro-fonts" />
        { date }
        { this.renderUserArea(this.state.loginArea) }
      </div>
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

