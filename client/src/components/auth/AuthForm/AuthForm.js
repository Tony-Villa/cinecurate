import React, { useState } from 'react';
import Login from '../Login/Login';
import Register from '../Register/Register';

export const AuthForm = () => {
  const [login, setLogin] = useState(false);

  return (
    <div>
      {login ? <Login /> : <Register />}
      <button className="btn-cta" onClick={() => setLogin(!login)}>
        {login ? 'Go to Register' : 'Go to Login'}
      </button>
    </div>
  );
};
