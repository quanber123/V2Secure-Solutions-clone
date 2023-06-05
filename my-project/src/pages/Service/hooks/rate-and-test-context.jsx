import { createContext, useEffect, useState } from 'react';
import rateAndTestData from '../../../data/rate-test';
export const RateAndTestContext = createContext();
export const RateAndTestProvider = ({ children }) => {
  const [title, setTitle] = useState(null);
  const [data, setData] = useState([]);
  useEffect(() => {
    setTitle(rateAndTestData.title);
    setData(rateAndTestData.articles);
  }, []);
  return (
    <RateAndTestContext.Provider value={{ title, data }}>
      {children}
    </RateAndTestContext.Provider>
  );
};
