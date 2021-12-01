import React, { useState } from 'react';

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

      // console.log(parsedRes.token);

      localStorage.setItem('token', parsedRes.token);
      setAuth(true);
      handleClose();
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <h1>login</h1>
      <form className="flex register__form" onSubmit={onSubmitForm} autoComplete="off">
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

        <button className="btn submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
