import React, { useState, useEffect } from "react";
const { tableau } = window;

function BasicEmbed({ title }) {
  const [url, setUrl] = useState("http://public.tableau.com/views/RegionalSampleWorkbook/Storms");

  const initViz = () => {
    console.log("Using the effect hook..");
    let containerDiv = document.getElementById("container");
    new tableau.Viz(containerDiv, url);
  };

  useEffect(initViz, []);

  return (
    <div>
      <h1>{title}</h1>
      <div style={setVizStyle} id="container" />
    </div>
  );
}

const setVizStyle = {
  width: "800px",
  height: "700px"
};

export default BasicEmbed;
