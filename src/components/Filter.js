import React, { useState, useEffect } from "react";
const { tableau } = window;

function Filter() {
  const [url] = useState("https://public.tableau.com/views/RegionalSampleWorkbook/College");
  const [viz, setViz] = useState(null);
  const [option, setOption] = useState("");
  const [optionList] = useState([
    {
      value: "",
      display: "All"
    },
    {
      value: "2013",
      display: "2013"
    },
    {
      value: "2014",
      display: "2014"
    }
  ]);

  const initViz = () => {
    console.log(optionList);
    let containerDiv = document.getElementById("container");
    const options = {
      "Academic Year": option
    };
    setViz(new tableau.Viz(containerDiv, url, options));
  };

  useEffect(initViz, []);

  const filterYear = year => {
    const sheet = viz.getWorkbook().getActiveSheet();
    if (year === "") {
      sheet.clearFilterAsync("Academic Year");
      setOption("");
    } else {
      sheet.applyFilterAsync("Academic Year", year, tableau.FilterUpdateType.REPLACE);
      setOption(year);
    }
  };

  return (
    <div>
      <h1>Filter</h1>
      <label>Select Academic Year</label>
      <select
        style={selectStyle}
        name="filterList"
        value={option}
        onChange={e => {
          filterYear(e.target.value);
        }}
      >
        {optionList.map(value => {
          return (
            <option key={value.value} value={value.value}>
              {value.display}
            </option>
          );
        })}
      </select>
      <div style={setVizStyle} id="container" />
    </div>
  );
}

const setVizStyle = {
  margin: "25px",
  width: "800px",
  height: "700px"
};

const selectStyle = {
  marginLeft: "10px"
};

export default Filter;
