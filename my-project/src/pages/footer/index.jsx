import React from 'react';
import SectionContact from './section-contact';
import SectionAbout from './section-about';
import LazyLoad from 'react-lazyload';
function Footer() {
  return (
    <footer className='relative flex flex-col bg-black'>
      <LazyLoad offset={0} once>
        <SectionContact />
      </LazyLoad>
      <LazyLoad offset={0} once>
        <SectionAbout />
      </LazyLoad>
    </footer>
  );
}

export default Footer;
