import React, { useState, useEffect } from "react";
const { tableau } = window;

function BasicEmbed(props) {
  const [url] = useState("https://public.tableau.com/views/RegionalSampleWorkbook/Storms");

  const initViz = () => {
    let containerDiv = document.getElementById("container");
    new tableau.Viz(containerDiv, url);
  };

  useEffect(initViz, []);

  return (
    <div>
      <h1>{props.location.state.title}</h1>
      <div style={setVizStyle} id="container" />
    </div>
  );
}

const setVizStyle = {
  width: "800px",
  height: "700px"
};

export default BasicEmbed;
