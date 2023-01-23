import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo"> IMGUR</h1>
      <button className="new-post-btn btn">
        <Link
          to='/newpost'
          className='nav-links'
        >
          New Post
        </Link>
      </button>
      <form className="d-flex">
        <input className="search-bar" type="search" placeholder="  Search" aria-label="Search" />
        <button className="search-btn btn" type="submit">Search</button>
      </form>
      <button className="signin-btn btn">
        <Link
          to='/login'
          className='nav-links'
        >
          Login
        </Link>
      </button>
      <button className="signup-btn btn">
        <Link
          to='/sign-up'
          className='nav-links'
        >
          SignUp
        </Link>
      </button>
    </nav>
  )
}

export default Navbar;
