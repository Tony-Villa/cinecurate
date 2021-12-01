import React, { useState } from 'react';
import './Register.scss';

function Register({ setAuth, handleClose }) {
  const [inputs, setInputs] = useState({
    email: '',
    username: '',
    first_name: '',
    password: '',
  });

  const { email, username, first_name, password } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { email, username, first_name, password };

      console.log(body);

      const res = await fetch(`https://api-cinecurate.herokuapp.com/v1/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const parsedRes = await res.json();

      // if (res?.body) {
      //   console.log('has token', res);
      // } else {
      //   console.log('nope', res);
      // }

      localStorage.setItem('token', 'asldkjalskdj');
      setAuth(true);
      handleClose();
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="register">
      <h1>Register</h1>
      <form className="flex register__form" onSubmit={onSubmitForm} autoComplete="off">
        <input
          className="input-auth"
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={(e) => onChange(e)}
        />
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
          type="text"
          name="first_name"
          placeholder="First Name"
          value={first_name}
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

        <button className="btn submit">Submit</button>
      </form>
    </div>
  );
}

export default Register;
