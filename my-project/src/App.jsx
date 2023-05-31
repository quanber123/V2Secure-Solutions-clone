import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './i18n';
import Layout from './components/layout';
import Page404 from './pages/404/index';
import { lazy, Suspense } from 'react';
const Home = lazy(() => import('./pages/Home/index'));
const Solutions = lazy(() => import('./pages/Solutions/index'));
const SIEM = lazy(() => import('./pages/Solutions/SIEM-section/SIEM'));
const WAF = lazy(() => import('./pages/Solutions/WAF-section/WAF'));
const NIPS = lazy(() => import('./pages/Solutions/NIPS-section/NIPS'));
const EDR = lazy(() => import('./pages/Solutions/EDR-section/EDR'));
const NAC = lazy(() => import('./pages/Solutions/NAC-section/NAC'));
const Service = lazy(() => import('./pages/Service/index'));
const Contact = lazy(() => import('./pages/Contact/index'));
function App() {
  return (
    <Suspense
      fallback={
        <div className='absolute text-4xl w-full h-full top-0 left-0 flex justify-center items-center'>
          ...Loading
        </div>
      }
    >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='solutions' element={<Solutions />}>
              <Route index element={<SIEM />} />
              <Route path='siem' element={<SIEM />} />
              <Route path='waf' element={<WAF />} />
              <Route path='nips' element={<NIPS />} />
              <Route path='edr' element={<EDR />} />
              <Route path='nac' element={<NAC />} />
            </Route>
            <Route path='services' element={<Service />} />
            <Route path='contact' element={<Contact />} />
            <Route path='*' element={<Page404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
