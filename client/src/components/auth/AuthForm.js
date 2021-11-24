import React, { useState } from 'react';

export const AuthForm = () => {
  const [signUp, setSignUp] = useState(false);

  return (
    <div>
      {signUp ? <div>this is Sign Up</div> : <div> This is login </div>}
      <button className="btn-cta" onClick={() => setSignUp(!signUp)}>
        {signUp ? 'Sign Up' : 'Login'}
      </button>
    </div>
  );
};
