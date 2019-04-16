import React, { useState, useEffect } from "react";
const { tableau } = window;

function Events() {
  const [url] = useState("https://public.tableau.com/views/RegionalSampleWorkbook/College");
  const [newViz, setViz] = useState(null);
  const [data, setData] = useState(null);

  function initViz() {
    let containerDiv = document.getElementById("container");
    const options = {
      "Academic Year": "",
      hideTabs: true,
      onFirstInteractive: () => {
        console.log("Getting started..");
        listenToMarksSelection();

        // when viz gets interactive, set the document title to the workbook name
        // when component unmounts it's being reset
        const workbookName = viz.getWorkbook().getName();
        document.title = workbookName;
      }
    };
    //const viz = new tableau.Viz(containerDiv, url, options);
    const viz = new tableau.Viz(containerDiv, url, options);
    setViz(viz);

    const listenToMarksSelection = () => {
      viz.addEventListener(tableau.TableauEventName.MARKS_SELECTION, onMarksSelection);
    };
  }

  useEffect(() => {
    initViz();
    // when unmounting the component, reset the document title
    return () => {
      console.log("Unmounting...");
      document.title = "React - Tableau JS API";
    };
  }, []);

  function onMarksSelection(marksEvent) {
    setData(null);
    marksEvent.getMarksAsync().then(marks => {
      for (let markIndex = 0; markIndex < marks.length; markIndex++) {
        const pairs = marks[markIndex].getPairs();
        setData(pairs);
      }
    });
  }

  function BuildList() {
    const items = data.map((e, i) => (
      <li key={i}>
        <strong>Field Name: </strong>
        {e.fieldName}
        <br />
        <b>Value: </b>
        {e.formattedValue}
      </li>
    ));
    return items;
  }

  return (
    <div style={{ overflow: "auto" }}>
      <h1>Respond to Events</h1>
      <div style={setVizStyle} id="container" />
      <div> {data ? <BuildList /> : null}</div>
    </div>
  );
}

const setVizStyle = {
  margin: "25px",
  width: "800px",
  height: "700px"
};

export default Events;
