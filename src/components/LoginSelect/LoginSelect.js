import React from 'react';

const LoginSelect = ({userState}) => {
  
  return(
    <div>
      <button onClick={() => userState('login')}>LOGIN</button>
      <button onClick={() => userState('sign up')}>SIGN UP</button>
    </div>
  )
}

export default LoginSelect;