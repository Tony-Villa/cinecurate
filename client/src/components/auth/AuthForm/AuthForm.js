import React, { useState } from 'react';
import Login from '../Login/Login';
import Register from '../Register/Register';
import './Authform.scss';

export const AuthForm = ({ setAuth, handleClose }) => {
  const [login, setLogin] = useState(false);

  return (
    <div className="auth-form">
      {login ? (
        <Register setAuth={setAuth} handleClose={handleClose} />
      ) : (
        <Login setAuth={setAuth} handleClose={handleClose} />
      )}
      <div className="flex auth-form__swap">
        {/* <button className="btn-cta " onClick={() => setLogin(!login)}>
          {login ? 'Go to Register' : 'Go to Login'}
        </button> */}
        {login ? (
          <div className="auth-form__swap-options flex mt-2">
            <p className="content-font"> Already signed up? </p>
            <button className="btn-cta auth-form__swap-btn" onClick={() => setLogin(!login)}>
              Log in
            </button>
          </div>
        ) : (
          <div className="auth-form__swap-options flex mt-2">
            <p className="content-font"> Don't Have an an account? </p>
            <button className="btn-cta auth-form__swap-btn" onClick={() => setLogin(!login)}>
              Sign Up!
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
