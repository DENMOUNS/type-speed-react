import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [score, setScore] = useState(0);

  return (
    <AppContext.Provider value={{ score, setScore }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
