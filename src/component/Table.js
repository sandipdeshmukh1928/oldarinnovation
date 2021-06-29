import React, { useState } from "react";
import Modal from "./Modal";
import Drag from "./Drag";

const Table = ({
  pname,
  price,
  state,
  _dragStart,
  _dragging,
  _dragEnd,
  setShowtable,
  showtable,
}) => {
  const [Shown, setShown] = useState(false);
  return (
    <div
      id="table"
      className="DragComponent"
      style={{ ...state.styles, display: showtable ? "block" : "none" }}
      onMouseDown={_dragStart}
      onMouseMove={_dragging}
      onMouseUp={_dragEnd}
    >
      <div type="button" onClick={() => setShown(true)}>
        <button type="button" className="btn btn-info  btn-sm infobutton">
          info
        </button>
      </div>
      <div onClick={() => setShowtable(false)}>
        <i class="fa fa-times fa-2x crossicon" aria-hidden="true"></i>
      </div>
      <iframe
        style={{ width: 200, height: 200 }}
        src="https://sayduck.com/3d/fKD3?hide-full-screen-button=1&hide-dimensions=1&hide-picker=1&hide-photo-studio=1&background-color=transparent&starting-variant=3e39c77a-d043-4729-9b57-afb03d2f9261&"
        frameBorder={0}
      />
      <Modal
        Shown={Shown}
        setShown={setShown}
        pname="Table"
        price={20}
        qty={1}
        pdesc="Anti-skid design in the base & top surface to avoid slipping
Sturdy compact and stylish and High quality of material Primary Material :- Plastic ,Strong and sturdy.GREAT HELP FOR KIDS TO REACH THE SINK - This step stool gives your children a sense."
      />
    </div>
  );
};

export default Drag(Table);
