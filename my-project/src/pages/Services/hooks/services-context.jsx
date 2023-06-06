import { createContext, useEffect, useState } from 'react';
import servicesData from '../../../data/data-services';
export const ServicesContext = createContext();
export const ServicesProvider = ({ children }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(servicesData);
  }, [servicesData]);
  return (
    <ServicesContext.Provider value={{ data }}>
      {children}
    </ServicesContext.Provider>
  );
};
