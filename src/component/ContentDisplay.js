import React, { useState } from "react";
import "./ContentDisplay.css";
import Chair from "./Chair";
import Table from "./Table";
import Sofa from "./Sofa";
import chair1 from "../assets/chair1.png";
import chair from "../assets/chair.png";
import sofa from "../assets/sofa.png";
import sofa2 from "../assets/sofa2.png";
import table from "../assets/table.png";
import table2 from "../assets/table2.png";

const ContentDisplay = () => {
  const [showcomp, setShowcomp] = useState(false);
  const [showtable, setShowtable] = useState(false);
  const [showsofa, setShowsofa] = useState(false);

  return (
    <>
      <div className="components">
        <div class="item" id="item1" onClick={() => setShowcomp(true)}>
          <img src={chair1} alt="" />
        </div>
        <div className="item" onClick={() => setShowtable(true)}>
          <img src={table} alt="" />
        </div>
        <div className="item" onClick={() => setShowsofa(true)}>
          <img src={sofa} alt="" />
        </div>
        <div className="item">
          <img src={chair} alt="" />
        </div>
        <div className="item">
          <img src={sofa2} alt="" />
        </div>
        <div className="item">
          <img src={table2} alt="" />
        </div>
      </div>
      <Chair showcomp={showcomp} setShowcomp={setShowcomp} />
      <Table showtable={showtable} setShowtable={setShowtable} />
      <Sofa showsofa={showsofa} setShowsofa={setShowsofa} />
    </>
  );
};

export default ContentDisplay;
