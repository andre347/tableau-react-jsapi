import React, { useState, useEffect } from "react";
import dashboards from "./VizList";
const { tableau } = window;

function DynamicLoad() {
  const [vizList] = useState(dashboards);
  const [vizCount, setVizCount] = useState(0);
  const [viz, setViz] = useState(null);

  const initViz = () => {
    let vizDiv = document.getElementById("vizContainer");
    let vizURL = vizList[vizCount];
    const options = {
      hideTabs: true
    };
    if (viz) {
      viz.dispose();
      setViz(null);
    }
    setViz(new tableau.Viz(vizDiv, vizURL, options));
  };

  useEffect(initViz, [vizCount]);

  return (
    <div>
      <h1>Dynamic Load</h1>
      <button onClick={() => setVizCount(checkminValue(vizCount))}>Previous</button>
      <button onClick={() => setVizCount(checkmaxValue(vizCount, vizList.length))}>Next</button>
      <div style={setVizStyle} id="vizContainer" />
    </div>
  );
}

const checkminValue = value => {
  return value > 1 ? value - 1 : 0;
};

const checkmaxValue = (value, max) => {
  return value < max - 1 ? value + 1 : max - 1;
};

const setVizStyle = {
  margin: "25px",
  width: "800px",
  height: "700px"
};

export default DynamicLoad;
