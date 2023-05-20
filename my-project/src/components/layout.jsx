import React from 'react';
import Header from './header';
import Main from './main';
import Footer from './footer';
import LazyLoad from 'react-lazyload';
function Layout() {
  return (
    <>
      <LazyLoad offset={100} once>
        <Header />
      </LazyLoad>
      <LazyLoad offset={100} once>
        <Main />
      </LazyLoad>
      <LazyLoad offset={100} once>
        <Footer />
      </LazyLoad>
    </>
  );
}

export default Layout;
