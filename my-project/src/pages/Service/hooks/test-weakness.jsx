import { createContext, useEffect, useState } from 'react';
import testWeaknessData from '../../../data/test-weakness';
export const TestWeaknessContext = createContext();
export const TestWeaknessProvider = ({ children }) => {
  const [title, setTitle] = useState(null);
  const [data, setData] = useState([]);
  useEffect(() => {
    setTitle(testWeaknessData.title);
    setData(testWeaknessData.articles);
  }, []);
  return (
    <TestWeaknessContext.Provider value={{ title, data }}>
      {children}
    </TestWeaknessContext.Provider>
  );
};
