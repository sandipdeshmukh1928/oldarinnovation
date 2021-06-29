import React, { useReducer, useContext } from "react";

const initialState = { furnitures: [] };

function reducer(state, action) {
  // console.log("object", action.data);
  switch (action.type) {
    case "UPDATE_FURNITURE_STATE":
      // return { furnitures: [{ pname: "sandip", price: "200" }] };
      // console.log(state.furnitures);
      // for (const item of state.furnitures) {
      //   if (item.pname) item.qty++;
      //   return (item.qty = 0);
      // }
      return { ...state, furnitures: [...state.furnitures, action.data] };

    default:
      // console.log("state", state);
      return state;
  }
}
export const StateContext = React.createContext();
export const StateProvider = ({ children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const GetAppState = () => useContext(StateContext);
