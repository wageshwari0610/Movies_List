import React, { Component } from "react";
import Counters from "./counters";

// stateless Functional Component 
const NavBar = (props) => {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand center-navbar" href="#">
          {" "}
          <span className="bage badge=pill badge-seconary ">
            {props.len} 
            
          </span>
          
        </a>
      </nav>
    );
}
export default NavBar;
