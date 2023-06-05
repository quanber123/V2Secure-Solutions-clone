import { createContext, useEffect, useState } from 'react';
import consultantData from '../../../data/consultant';
export const ConsultContext = createContext();
export const ConsultProvider = ({ children }) => {
  const [title, setTitle] = useState(null);
  const [data, setData] = useState([]);
  useEffect(() => {
    setTitle(consultantData.title);
    setData(consultantData.articles);
  }, []);
  return (
    <ConsultContext.Provider value={{ title, data }}>
      {children}
    </ConsultContext.Provider>
  );
};
