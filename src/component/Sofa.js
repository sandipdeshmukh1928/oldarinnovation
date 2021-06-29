import React, { useState } from "react";
import Modal from "./Modal";
import Drag from "./Drag";

const Firepot = ({
  pname,
  price,
  state,
  _dragStart,
  _dragging,
  _dragEnd,
  showsofa,
  setShowsofa,
}) => {
  const [Shown, setShown] = useState(false);
  return (
    <div
      id="sofa"
      className="DragComponent"
      style={{ ...state.styles, display: showsofa ? "block" : "none" }}
      onMouseDown={_dragStart}
      onMouseMove={_dragging}
      onMouseUp={_dragEnd}
    >
      <div type="button" onClick={() => setShown(true)}>
        <button type="button" className="btn btn-info  btn-sm infobutton">
          info
        </button>
      </div>
      <div onClick={() => setShowsofa(false)}>
        <i class="fa fa-times fa-2x crossicon" aria-hidden="true"></i>
      </div>

      <iframe
        style={{ width: 400, height: 350 }}
        src="https://sayduck.com/3d/r695?hide-full-screen-button=1&hide-dimensions=1&hide-picker=1&hide-photo-studio=1&background-color=transparent&starting-variant=aec5b425-4ef0-46ab-8273-adff20cb0620&"
        frameBorder={0}
      />

      <Modal
        Shown={Shown}
        setShown={setShown}
        pname="Sofa"
        price={99}
        qty={1}
        pdesc="2 Seater: Length - 151.8 cm, Width - 85 cm, Height - 85.3 cm (59.8
          inches x 33.5 inches x 33.6 inches) Aart store brand new 3 in 1 sofa
          cums bed has a flocking surface & is filled with high-quality soft
          foam to achieve a more comfortable sitting as well as sleeping."
      />
    </div>
  );
};

export default Drag(Firepot);
