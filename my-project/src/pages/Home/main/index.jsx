import React from 'react';
import LazyLoad from 'react-lazyload';
import OurServices from './section-our-services';
import OurSolutions from './section-our-solutions/index';
// import Gallery from './section-gallery';
function Main() {
  return (
    <main id='our-services' className=' p-12'>
      <LazyLoad offset={0} once>
        <OurServices />
      </LazyLoad>
      <LazyLoad offset={0} once>
        <OurSolutions />
      </LazyLoad>
      {/* <LazyLoad offset={0} once>
        <Gallery />
      </LazyLoad> */}
    </main>
  );
}

export default Main;
