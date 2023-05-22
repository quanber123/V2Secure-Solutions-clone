import React from 'react';
import LazyLoad from 'react-lazyload';
import SIEM from './section-SIEM/SIEM';
import WAF from './section-WAF/WAF';
import NIPS from './section-NIPS/NIPS';
import EDR from './section-EDR/EDR';
import NAC from './section-NAC/NAC';
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
