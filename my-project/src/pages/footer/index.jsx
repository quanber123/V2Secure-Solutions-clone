import React from 'react';
import SectionContact from './section-contact';
import SectionAbout from './section-about';
function Footer() {
  return (
    <footer className='relative flex flex-col Scale bg-black'>
      <SectionContact />
      <SectionAbout />
    </footer>
  );
}

export default Footer;
