import { createContext, useReducer } from "react";
export const DataContext = createContext();
function DataProvider({ children, reducer, initialState }) {
  return (
    <DataContext.Provider value={useReducer(reducer, initialState)}>
      {/* App.jsx, and the  useReducer(reducer, initialState) is inherited to the children*/}
      {children}
    </DataContext.Provider>
  );
}
export default DataProvider;
