import React from 'react';
import '../Css/nav.css';
import { Link } from 'react-router-dom'

function Nav(){
  return (
        <div className="navbar">
            <img src="" alt=""/>
            <Link to="/signup">
                <button>Sign Up</button>
            </Link>
        </div>
  );
}

export default Nav;
