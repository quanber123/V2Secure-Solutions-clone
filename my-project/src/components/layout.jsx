import React from 'react';
import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Spinner from './spinner';
const ScrollPage = lazy(() => import('../pages/scroll-page/index'));
const Nav = lazy(() => import('./nav'));
const Footer = lazy(() => import('../pages/footer/index'));
function Layout() {
  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <Nav />
        <Outlet />
        <Footer />
        <ScrollPage />
      </Suspense>
    </div>
  );
}

export default Layout;
