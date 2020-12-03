import React, { useState } from 'react';

const Login = ({ setUser }) => {
  const [username, setUsername] = useState('');

  const submitUserHandler = (e) => {
    e.preventDefault();
    setUser(username);
  };

  return (
    <div>
      <h3>Please log in</h3>
      <form onSubmit={submitUserHandler}>
        <input
          type="text"
          placeholder="Your name"
          onChange={(e) => setUsername(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
