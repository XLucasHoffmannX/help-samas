import { createContext } from 'react';

export const Context = createContext();

export const DataProvider = ({ children }) => {
  const state = {
    teste : 'teste'
  }

  return (
    <Context.Provider value={state}>
      {children}
    </Context.Provider>
  )
}