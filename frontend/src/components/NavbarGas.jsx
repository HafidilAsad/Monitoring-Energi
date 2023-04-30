import React from "react";

const NavbarGas = () => {
  return (
    <nav
      className="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand has-text-centered">
        <a className="navbar-item" href="/">
          <h1 className="title is-4">My Website Title</h1>
        </a>
        <button
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <a className="navbar-item" href="/">
            Home
          </a>
          <a className="navbar-item" href="/">
            About
          </a>
          <a className="navbar-item" href="/">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavbarGas;
