import React from 'react';
import { Outlet } from 'react-router-dom';
import NavSolutions from './nav-solutions';
function Solutions() {
  return (
    <section>
      <NavSolutions />
      <Outlet />
    </section>
  );
}

export default Solutions;
