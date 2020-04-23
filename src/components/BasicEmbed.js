import React, { useState, useEffect, useRef } from "react";
const { tableau } = window;

function BasicEmbed(props) {
  const [url] = useState(
    "https://public.tableau.com/views/RegionalSampleWorkbook/Storms"
  );
  const ref = useRef(null);

  const initViz = () => {
    new tableau.Viz(ref.current, url);
  };

  useEffect(initViz, []);

  return (
    <div>
      <h1>{props.location.state.title}</h1>
      <div style={setVizStyle} ref={ref} />
    </div>
  );
}

const setVizStyle = {
  width: "800px",
  height: "700px",
};

export default BasicEmbed;
