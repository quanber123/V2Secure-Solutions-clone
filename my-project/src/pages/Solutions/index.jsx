import React from 'react';
import { Outlet } from 'react-router-dom';
import NavSolutions from './nav-solutions';
import LazyLoad from 'react-lazyload';
function Solutions() {
  return (
    <section>
      <LazyLoad offset={0} once>
        <NavSolutions />
      </LazyLoad>
      <Outlet />
    </section>
  );
}

export default Solutions;
