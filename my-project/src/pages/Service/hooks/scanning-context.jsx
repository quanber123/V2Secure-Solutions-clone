import { createContext, useEffect, useState } from 'react';
import scanningData from '../../../data/scanning';
export const ScanningContext = createContext();
export const ScanningProvider = ({ children }) => {
  const [title, setTitle] = useState(null);
  const [data, setData] = useState([]);
  useEffect(() => {
    setTitle(scanningData.title);
    setData(scanningData.articles);
  }, []);
  return (
    <ScanningContext.Provider value={{ title, data }}>
      {children}
    </ScanningContext.Provider>
  );
};
