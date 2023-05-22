import React from 'react';
import { lazy, Suspense } from 'react';
const Header = lazy(() => import('./header/index'));
const Main = lazy(() => import('./main/index'));
const Footer = lazy(() => import('./footer/index'));
const ScrollPage = lazy(() => import('./scroll-page/index'));
function Layout() {
  return (
    <Suspense
      fallback={
        <div className='absolute text-4xl w-full h-full top-0 left-0 flex justify-center items-center'>
          ...Loading
        </div>
      }
    >
      <Header />
      <Main />
      <Footer />
      <ScrollPage />
    </Suspense>
  );
}

export default Layout;
