import React, { Suspense, lazy } from 'react';
const Header = lazy(() => import('./header'));
const Main = lazy(() => import('./main/main'));
function Layout() {
  return (
    <>
      <Suspense>
        <Header />
        <Main />
      </Suspense>
    </>
  );
}

export default Layout;
