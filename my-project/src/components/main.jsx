import React from 'react';
import LazyLoad from 'react-lazyload';
import SIEM from './main/SIEM';
import WAF from './main/WAF';
import NIPS from './main/NIPS';
import EDR from './main/EDR';
import NAC from './main/NAC';
import Gallery from './main/gallery';
import Contact from './main/contact';

function Main() {
  const lazyLoadOptions = {
    offset: 100,
    once: true,
  };

  return (
    <main>
      <LazyLoad {...lazyLoadOptions}>
        <SIEM />
      </LazyLoad>
      <LazyLoad {...lazyLoadOptions}>
        <WAF />
      </LazyLoad>
      <LazyLoad {...lazyLoadOptions}>
        <NIPS />
      </LazyLoad>
      <LazyLoad {...lazyLoadOptions}>
        <EDR />
      </LazyLoad>
      <LazyLoad {...lazyLoadOptions}>
        <NAC />
      </LazyLoad>
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
