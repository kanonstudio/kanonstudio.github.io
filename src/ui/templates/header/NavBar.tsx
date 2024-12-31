/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-black bg-opacity-75 px-2">
      <div>
        <img src="/images/logo.png" className="site-logo" alt="site logo" />
        <Link className="navbar-brand" href="/">
          Kanon Studio
        </Link>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarsExample01"
        aria-controls="navbarsExample01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse px-2" id="navbarsExample01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" href="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/about">
              About Me
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/gallery">
              Gallery
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/blog">
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
