import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import BasicEmbed from "../components/BasicEmbed";
import DynamicLoad from "../components/DynamicLoad";
import ExportPDF from "../components/ExportPDF";
import Filter from "../components/Filter";
import GetData from "../components/GetData";
import Resize from "../components/Resize";
import Home from "../components/Home";

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
          </ul>
        </nav>

        <section>
          <Route path="/" exact component={Home} />
          <Route path="/embed/" component={BasicEmbed} />
          <Route path="/dynamic-load/" component={DynamicLoad} />
          <Route path="/export-pdf/" component={ExportPDF} />
          <Route path="/filter/" component={Filter} />
          <Route path="/get-data/" component={GetData} />
          <Route path="/resize/" component={Resize} />
          {/* testing sending string prop and destructure in component */}
        </section>
      </div>
    </Router>
  );
}

export default Header;
