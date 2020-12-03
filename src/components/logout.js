import React from 'react';

const Logout = ({ setUser }) => {
  return (
    <>
      <button onClick={() => setUser('')}>Logout</button>
    </>
  );
};

export default Logout;
