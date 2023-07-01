import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './i18n';
import Layout from './components/layout';
import Page404 from './pages/404/index';
import { lazy, Suspense } from 'react';
import Spinner from './components/spinner';
const Home = lazy(() => import('./pages/home/index'));
const ServicesList = lazy(() => import('./pages/services/services-list'));
const ServiceDetail = lazy(() => import('./pages/services/service-detail'));
const SolutionsList = lazy(() => import('./pages/solutions/solutions-list'));
const SolutionDetail = lazy(() => import('./pages/solutions/solution-detail'));
const Contact = lazy(() => import('./pages/contact/index'));
function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='solutions'>
              <Route index element={<SolutionsList />} />
              <Route path=':link' element={<SolutionDetail />} />
            </Route>
            <Route path='services'>
              <Route index element={<ServicesList />} />
              <Route path=':link' element={<ServiceDetail />} />
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
