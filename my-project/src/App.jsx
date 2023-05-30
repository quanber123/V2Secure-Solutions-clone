import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './i18n';
import Layout from './components/layout';
import Page404 from './pages/404/index';
import { lazy } from 'react';
const Home = lazy(() => import('./pages/Home/index'));
const SIEM = lazy(() => import('./pages/SIEM/SIEM'));
const WAF = lazy(() => import('./pages/WAF/WAF'));
const NIPS = lazy(() => import('./pages/NIPS/NIPS'));
const EDR = lazy(() => import('./pages/EDR/EDR'));
const NAC = lazy(() => import('./pages/NAC/NAC'));
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='siem' element={<SIEM />} />
            <Route path='waf' element={<WAF />} />
            <Route path='nips' element={<NIPS />} />
            <Route path='edr' element={<EDR />} />
            <Route path='nac' element={<NAC />} />
          </Route>
          <Route path='*' element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
