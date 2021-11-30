import React, { useState } from 'react';
import Login from '../Login/Login';
import Register from '../Register/Register';

export const AuthForm = ({ setAuth, handleClose }) => {
  const [login, setLogin] = useState(false);

  return (
    <div className="auth-form">
      {login ? (
        <Login setAuth={setAuth} handleClose={handleClose} />
      ) : (
        <Register setAuth={setAuth} handleClose={handleClose} />
      )}
      <button className="btn-cta" onClick={() => setLogin(!login)}>
        {login ? 'Go to Register' : 'Go to Login'}
      </button>
    </div>
  );
};
