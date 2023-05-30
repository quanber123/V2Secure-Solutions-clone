import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './i18n';
import Layout from './components/layout';
import Page404 from './pages/404/index';
import { lazy, Suspense } from 'react';
const Home = lazy(() => import('./pages/Home/index'));
const SIEM = lazy(() => import('./pages/SIEM/SIEM'));
const WAF = lazy(() => import('./pages/WAF/WAF'));
const NIPS = lazy(() => import('./pages/NIPS/NIPS'));
const EDR = lazy(() => import('./pages/EDR/EDR'));
const NAC = lazy(() => import('./pages/NAC/NAC'));
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
            <Route path='siem' element={<SIEM />} />
            <Route path='waf' element={<WAF />} />
            <Route path='nips' element={<NIPS />} />
            <Route path='edr' element={<EDR />} />
            <Route path='nac' element={<NAC />} />
            <Route path='service' element={<Service />} />
            <Route path='contact' element={<Contact />} />
            <Route path='*' element={<Page404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
