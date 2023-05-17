import React from 'react';
import LazyLoad from 'react-lazyload';
import logo from '../images/ecosystem/download.png';
function Header() {
  return (
    <header>
      <nav>
        <section className='container'>
          <LazyLoad></LazyLoad>
        </section>
      </nav>
    </header>
  );
}

export default Header;
