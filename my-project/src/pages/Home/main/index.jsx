import React from 'react';
import LazyLoad from 'react-lazyload';
import Gallery from './section-gallery/index';
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
    </main>
  );
}

export default Main;
