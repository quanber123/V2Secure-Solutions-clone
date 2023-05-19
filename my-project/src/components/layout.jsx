import React, { Suspense, lazy } from 'react';
const Header = lazy(() => import('./header'));
const Main = lazy(() => import('./main'));
const Footer = lazy(() => import('./footer'));
function Layout() {
  return (
    <>
      <Suspense>
        <Header />
        <Main />
        <Footer />
      </Suspense>
    </>
  );
}

export default Layout;
