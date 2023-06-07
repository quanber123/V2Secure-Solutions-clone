import { createContext, useEffect, useState } from 'react';
import Data from '../../../data/data-services';
export const ServicesContext = createContext();
export const ServicesProvider = ({ children }) => {
  const { data } = Data();
  const [dataServices, setDataServices] = useState([]);
  const lang = window.localStorage.getItem('language') || 'en';
  useEffect(() => {
    setDataServices(data);
  }, [lang]);
  return (
    <ServicesContext.Provider value={{ dataServices }}>
      {children}
    </ServicesContext.Provider>
  );
};
