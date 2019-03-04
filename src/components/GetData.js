import React, { useState, useEffect } from "react";
const { tableau } = window;

function GetData() {
  const [url] = useState("https://public.tableau.com/views/RegionalSampleWorkbook/Storms");
  const [viz, setViz] = useState(null);
  const [sheet, setSheet] = useState(null);
  const [data, setData] = useState(null);
  const [rows, setRows] = useState(10);
  const [disabledState, setDisabled] = useState("disabled");

  const initViz = () => {
    let options = {
      hideTabs: true,
      hideToolbar: true,
      onFirstInteractive: () => {
        console.log("Enabling button..");
        setDisabled("");
      }
    };
    let containerDiv = document.getElementById("container");
    setViz(new tableau.Viz(containerDiv, url, options));
  };

  function GetUnderlyingData() {
    let selectedSheet = viz
      .getWorkbook()
      .getActiveSheet()
      .getWorksheets()
      .get("Storm Map Sheet");

    setSheet(selectedSheet);

    let options = {
      maxRows: rows,
      ignoreAliases: false,
      ignoreSelection: true,
      includeAllColumns: false
    };

    selectedSheet.getUnderlyingDataAsync(options).then(t => {
      setData(t.getData());
    });
  }

  useEffect(initViz, []);

  function BuildTable() {
    return <p>{JSON.stringify(data)}</p>;
  }

  return (
    <div>
      <h1>Get Data</h1>
      <button disabled={disabledState} style={{ marginRight: "5px" }} onClick={() => GetUnderlyingData()}>
        Get Data
      </button>
      <input
        type="number"
        placeholder="Max Number of Rows"
        onChange={e => {
          setRows(e.target.value);
        }}
      />
      <div style={setVizStyle} id="container" />
      <div style={{ width: "800px" }}>{data ? <BuildTable /> : null}</div>
    </div>
  );
}

const setVizStyle = {
  margin: "25px",
  width: "600px",
  height: "650px"
};

export default GetData;
