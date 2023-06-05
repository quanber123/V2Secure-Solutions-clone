import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './i18n';
import Layout from './components/layout';
import Page404 from './pages/404/index';
import { lazy, Suspense } from 'react';
import Spinner from './components/spinner';
const Home = lazy(() => import('./pages/Home/index'));
const Solutions = lazy(() => import('./pages/Solutions/index'));
const SIEM = lazy(() => import('./pages/Solutions/SIEM-section/SIEM'));
const WAF = lazy(() => import('./pages/Solutions/WAF-section/WAF'));
const NIPS = lazy(() => import('./pages/Solutions/NIPS-section/NIPS'));
const EDR = lazy(() => import('./pages/Solutions/EDR-section/EDR'));
const NAC = lazy(() => import('./pages/Solutions/NAC-section/NAC'));
const Service = lazy(() => import('./pages/Service/index'));
const RateAndTest = lazy(() =>
  import('./pages/Service/rate-and-test-section/articles')
);
const RateAndTestDetails = lazy(() =>
  import('./pages/Service/rate-and-test-section/articleDetail')
);
const Consultant = lazy(() =>
  import('./pages/Service/consultant-section/articles')
);
const ConsultantDetail = lazy(() =>
  import('./pages/Service/consultant-section/articleDetail')
);
const Scanning = lazy(() =>
  import('./pages/Service/scanning-section/articles')
);
const ScanningDetail = lazy(() =>
  import('./pages/Service/scanning-section/articleDetail')
);
const TestWeakness = lazy(() =>
  import('./pages/Service/test-weakness-section/articles')
);
const TestWeaknessDetail = lazy(() =>
  import('./pages/Service/test-weakness-section/articleDetail')
);
const Contact = lazy(() => import('./pages/Contact/index'));
function App() {
  return (
    <Suspense fallback={<Spinner />}>
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
            <Route path='services' element={<Service />}>
              <Route index element={<RateAndTest />} />
              <Route path='rate-and-test'>
                <Route index element={<RateAndTest />} />
                <Route path=':id' element={<RateAndTestDetails />} />
              </Route>
              <Route path='consultant'>
                <Route index element={<Consultant />} />
                <Route path=':id' element={<ConsultantDetail />} />
              </Route>
              <Route path='scanning'>
                <Route index element={<Scanning />} />
                <Route path=':id' element={<ScanningDetail />} />
              </Route>
              <Route path='test-weakness'>
                <Route index element={<TestWeakness />} />
                <Route path=':id' element={<TestWeaknessDetail />} />
              </Route>
            </Route>
            <Route path='contact' element={<Contact />} />
            <Route path='*' element={<Page404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
