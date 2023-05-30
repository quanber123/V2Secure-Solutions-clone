import React from 'react';
import LazyLoad from 'react-lazyload';
import Gallery from './section-gallery/index';
import Contact from './section-contact/index';
function Main() {
  const lazyLoadOptions = {
    offset: 100,
    once: true,
  };
  return (
    <main>
      <LazyLoad {...lazyLoadOptions}>
        <Gallery />
      </LazyLoad>
      <LazyLoad {...lazyLoadOptions}>
        <Contact />
      </LazyLoad>
    </main>
  );
}

export default Main;
