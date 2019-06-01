import React from 'react';

const SignUp = ({name, password, email, handleChange, handleSubmit, userState}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type='text'
            name='name'
            placeholder='Name'
            value={name}
            onChange={handleChange}
          />
        </label>
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
          value='Sign Up'
        />
        <button onClick={() => userState('initial')}>GO BACK</button>
      </form>
    </div>
  )
}

export default SignUp;
