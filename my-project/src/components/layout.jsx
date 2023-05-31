import React from 'react';
import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
const ScrollPage = lazy(() => import('../pages/scroll-page/index'));
const Nav = lazy(() => import('./nav'));
const Footer = lazy(() => import('../pages/footer/index'));
function Layout() {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        // backgroundImage: `url(${bgImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        objectFit: 'cover',
      }}
    >
      <Suspense
        fallback={
          <div className='absolute text-4xl w-full h-full top-0 left-0 flex justify-center items-center'>
            ...Loading
          </div>
        }
      >
        <Nav />
        <Outlet />
        <Footer />
        <ScrollPage />
      </Suspense>
    </div>
  );
}

export default Layout;
