import React, { useState } from "react";
import Modal from "./Modal";
import Drag from "./Drag";

const Chair = ({
  state,
  _dragStart,
  _dragging,
  _dragEnd,
  showcomp,
  setShowcomp,
}) => {
  const [Shown, setShown] = useState(false);
  return (
    <>
      <div
        id="chair"
        className="DragComponent"
        // style={state.styles}
        style={{ ...state.styles, display: showcomp ? "block" : "none" }}
        onMouseDown={_dragStart}
        onMouseMove={_dragging}
        onMouseUp={_dragEnd}
      >
        <div type="button" onClick={() => setShown(true)}>
          <button type="button" className="btn btn-info  btn-sm infobutton">
            info
          </button>
        </div>
        <div onClick={() => setShowcomp(false)}>
          <i class="fa fa-times fa-2x crossicon" aria-hidden="true"></i>
        </div>
        <iframe
          style={{ width: 250, height: 250 }}
          src="https://sayduck.com/3d/Vk5p?hide-full-screen-button=1&hide-dimensions=1&hide-picker=1&hide-photo-studio=1&background-color=transparent&starting-variant=ac4a2c8b-2923-4cbe-9313-8dc1a475ff99&"
          frameBorder={0}
        />
        <Modal
          pname="Chair"
          price={10}
          qty={1}
          Shown={Shown}
          setShown={setShown}
          pdesc="Comfort & Material: The breathable mesh back & thick moulded foam seat with fabric material on this office chair provides support while also eliminating heat and moisture build-up to keep your whole body cool and comfortableTilt Mode"
        />
      </div>
    </>
  );
};

export default Drag(Chair);
