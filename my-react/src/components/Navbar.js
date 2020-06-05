import React from 'react';
import {Link, NavLink} from 'react-router-dom'
const Navbar = () =>{
return(
   
<div>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand">My Blog</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/newcomment">Create new comment <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/about">About <span className="sr-only">(current)</span></a>
      </li>
      
    </ul>
  </div>
</nav>

</div>

)

}

export default Navbar