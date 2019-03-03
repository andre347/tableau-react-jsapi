import React, { useState, useEffect } from "react";
const { tableau } = window;

function ExportPDF() {
  const [url] = useState("https://public.tableau.com/views/RegionalSampleWorkbook/Obesity");
  const [viz, setViz] = useState(null);

  const initViz = () => {
    let containerDiv = document.getElementById("container");
    setViz(new tableau.Viz(containerDiv, url));
  };

  useEffect(initViz, []);

  const exportToPDF = () => {
    viz.showExportPDFDialog();
  };

  return (
    <div>
      <h1>Export PDF</h1>
      <button onClick={exportToPDF}>Export PDF</button>
      <div style={setVizStyle} id="container" />
    </div>
  );
}

const setVizStyle = {
  margin: "25px",
  width: "800px",
  height: "700px"
};

export default ExportPDF;
