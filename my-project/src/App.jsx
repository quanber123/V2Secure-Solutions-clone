import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './i18n';
const Layout = lazy(() => import('./components/layout'));
const ScrollPage = lazy(() => import('./components/scroll'));
function App() {
  return (
    <>
      <Suspense
        fallback={
          <div className='absolute text-4xl w-full h-full top-0 left-0 flex justify-center items-center'>
            ...Loading
          </div>
        }
      >
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />} />
          </Routes>
          <ScrollPage />
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
