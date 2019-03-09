import React, { useState, useEffect } from "react";
const { tableau } = window;

function Resize() {
  const [url] = useState("https://public.tableau.com/views/RegionalSampleWorkbook/Stocks");
  const [viz, setViz] = useState(null);
  const [width, setWidth] = useState(600);
  const [height, setHeight] = useState(650);

  const initViz = () => {
    let options = {
      hideTabs: true,
      onFirstInteractive: () => {
        console.log("Loading..");
      }
    };
    let containerDiv = document.getElementById("container");
    setViz(new tableau.Viz(containerDiv, url, options));
  };

  const setVizStyle = {
    margin: "25px",
    width: width + 25,
    height: height + 25
  };

  function SetDimensions() {
    viz.setFrameSize(parseInt(width, 10), parseInt(height, 10));
  }

  useEffect(initViz, []);

  return (
    <div>
      <h1>Resize</h1>
      <input
        type="number"
        placeholder="Width"
        onChange={e => {
          setWidth(e.target.value);
        }}
      />
      <input
        type="number"
        placeholder="Height"
        onChange={e => {
          setHeight(e.target.value);
        }}
      />
      <button style={{ marginRight: "5px" }} onClick={() => SetDimensions()}>
        Resize
      </button>
      <div style={setVizStyle} id="container" />
    </div>
  );
}

export default Resize;
