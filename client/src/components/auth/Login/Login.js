import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.scss';

const Login = ({ setAuth, handleClose }) => {
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });

  const { username, password } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { username, password };

      const res = await fetch(`https://api-cinecurate.herokuapp.com/v1/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const parsedRes = await res.json();

      if (parsedRes.token) {
        localStorage.setItem('token', parsedRes.token);
        setAuth(true);
        handleClose();
        toast.success('Login Successful!', { theme: 'dark' });
      } else {
        setAuth(false);
        toast.error(parsedRes, { theme: 'dark' });
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="login">
      <h1 className="header-font">Login</h1>
      <form className="flex login__form" onSubmit={onSubmitForm} autoComplete="off">
        <input
          className="input-auth"
          type="text"
          name="username"
          placeholder="username"
          value={username}
          onChange={(e) => onChange(e)}
        />
        <input
          className="input-auth"
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={(e) => onChange(e)}
        />

        <button className="btn-search login__submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
