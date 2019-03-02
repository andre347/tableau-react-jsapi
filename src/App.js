import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import BasicEmbed from "./components/BasicEmbed";
import Home from "./components/Home";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
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
            </ul>
          </nav>

          <Route path="/" exact component={Home} />
          <Route path="/embed/" component={BasicEmbed} />
          {/* testing sending string prop and destructure in component */}
        </div>
      </Router>
    );
  }
}

export default App;
