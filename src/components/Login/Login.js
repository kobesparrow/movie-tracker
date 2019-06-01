import React from 'react';

const Login = ({ handleChange, handleSubmit, userState }) => {

  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          E-mail
          <input
            type='email'
            name='email'
            placeholder='example@example.com...'
            value={email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password
          <input
            type='password'
            name='password'
            placeholder='Password'
            value={password}
            onChange={handleChange}
          />
        </label>
        <input
          type='submit'
          value='Login'
        />
        <button onClick={ () => userState('initial') }>GO BACK</button>
      </form>
    </div>
  )
}

export default Login;
