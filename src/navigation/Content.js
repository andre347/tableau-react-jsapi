import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Main from "./Main";

function Header() {
  return (
    <Router>
      <div className="App">
        <nav className="navBar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: "/embed/",
                  state: {
                    title: "Basic Embed"
                  }
                }}
              >
                Basic Embed
              </Link>
            </li>
            <li>
              <Link to="/dynamic-load">Dynamic Load</Link>
            </li>
            <li>
              <Link to="/export-pdf">Export PDF</Link>
            </li>
            <li>
              <Link to="/filter">Filter</Link>
            </li>
            <li>
              <Link to="/get-data">Get Data</Link>
            </li>
            <li>
              <Link to="/resize">Resize</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
          </ul>
        </nav>

        <Main />
      </div>
    </Router>
  );
}

export default Header;
