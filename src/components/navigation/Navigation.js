import React from 'react';
import logo from '../../assets/images/book.png';
import LogIn from './LogIn';
import LogOut from './LogOut';

const Navigation = () => {
  return (
    <nav>
      <img src={logo} alt="iRead logo" id="logo" />
      <ul className="nav-bar">
        <li id="my-library">My Library</li>
        <LogIn />
      </ul>
    </nav>
  );
};

export default Navigation;
