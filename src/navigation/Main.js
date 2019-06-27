import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import BasicEmbed from "../components/BasicEmbed";
import DynamicLoad from "../components/DynamicLoad";
import ExportPDF from "../components/ExportPDF";
import Filter from "../components/Filter";
import GetData from "../components/GetData";
import Resize from "../components/Resize";
import Events from "../components/Events";
import Home from "../components/Home";
import Animation from "../components/Animation";

function Main() {
  return (
    <section>
      <Route path="/" exact component={Home} />
      <Route path="/embed/" component={BasicEmbed} />
      <Route path="/dynamic-load/" component={DynamicLoad} />
      <Route path="/export-pdf/" component={ExportPDF} />
      <Route path="/filter/" component={Filter} />
      <Route path="/get-data/" component={GetData} />
      <Route path="/resize/" component={Resize} />
      <Route path="/events/" component={Events} />
      <Route path="/animation/" component={Animation} />
      {/* testing sending string prop and destructure in component */}
    </section>
  );
}

export default Main;
