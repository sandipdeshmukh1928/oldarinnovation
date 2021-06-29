import React, { useState } from "react";

const Drag = (DragComp) => {
  const NewComp = (props) => {
    const [state, setState] = useState({
      diffX: 0,
      diffY: 0,
      dragging: false,
      styles: {},
    });
    const _dragStart = (e) => {
      setState({
        ...state,
        diffX: e.screenX - e.currentTarget.getBoundingClientRect().left,
        diffY: e.screenY - e.currentTarget.getBoundingClientRect().top,
        dragging: true,
      });
    };

    const _dragging = (e) => {
      if (state.dragging) {
        var left = e.screenX - state.diffX;
        var top = e.screenY - state.diffY;

        setState({
          ...state,
          styles: {
            left: left,
            top: top,
          },
        });
      }
    };

    const _dragEnd = () => {
      setState({ ...state, dragging: false });
    };

    return (
      <DragComp
        state={state}
        _dragStart={_dragStart}
        _dragging={_dragging}
        _dragEnd={_dragEnd}
        {...props}
      />
    );
  };
  return NewComp;
};

export default Drag;
