import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../actions';

export class UserInputs extends Component {
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
    this.setState({[name]: value})
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    if(e.target.value === 'Login') {
        let urlLogin = 'http://localhost:3000/api/users'
        const init = {
          method: 'POST',
          body: JSON.stringify(this.state),
          headers: {
            'Content-Type': 'application/json'
          }
        }
        fetch(urlLogin, init)
          .then(response => response.json())
          .then(currentUser => this.props.loginUser(currentUser.data))
          .catch(error => console.log(error.message))
    }

  }

  render() {
    const { handleChange } = this
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
            <label>
                Name
                <input
                    type='text'
                    name='name'
                    placeholder='Name'
                    value={this.state.name}
                    onChange={handleChange}
                />
            </label>
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
