import React from 'react';
import Logout from './logout';

const Header = ({ user, setUser }) => {
  return (
    <div>
      Welcome <b>{user}</b>
      <Logout setUser={setUser} />
    </div>
  );
};

export default Header;
