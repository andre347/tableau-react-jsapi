import React, { useState, useEffect } from "react";
const { tableau } = window;

function Animation() {
  const [url] = useState("https://public.tableau.com/views/AnimationDashboard_15616567350970/Sheet1");
  const [viz, setViz] = useState(null);
  const [timer, setTimer] = useState(1000);
  const [yearFilter, setYearFilter] = useState();

  const initViz = () => {
    const yearArr = [...Array(2011 + 1).keys()].slice(1960);
    setYearFilter(yearArr);
    let containerDiv = document.getElementById("container");
    const options = {
      Year: yearArr[0]
    };
    setViz(new tableau.Viz(containerDiv, url, options));
  };

  useEffect(initViz, []);

  let filterInterval;

  const startAnimate = async () => {
    console.log("Starting the animation...");
    const sheet = await viz.getWorkbook().activateSheetAsync("Sheet 1");
    let yearInterval = yearFilter[0];
    filterInterval = setInterval(() => {
      sheet.applyFilterAsync("Year", yearInterval, tableau.FilterUpdateType.REPLACE);
      yearInterval++;
      if (yearInterval === yearFilter[yearFilter.length - 1]) {
        clearInterval(filterInterval);
      }
    }, timer);
  };

  const stopAnimate = () => {
    console.log("Stopping the animation...");
    clearInterval(filterInterval);
  };

  return (
    <div>
      <h1>Animation</h1>
      <h3>Every {timer} miliseconds</h3>
      <p>
        <strong>Note:</strong> 1 second (1000ms - default speed) is about the fastest animation speed
      </p>
      <input placeholder="Animation in ms" onChange={e => setTimer(e.target.value)} />
      <button style={{ padding: "4px" }} onClick={() => startAnimate()}>
        Start
      </button>
      <button style={{ padding: "4px" }} onClick={() => stopAnimate()}>
        Stop
      </button>
      <div style={setVizStyle} id="container" />
    </div>
  );
}

const setVizStyle = {
  margin: "25px",
  width: "800px",
  height: "700px"
};

export default Animation;
