import React from 'react';
import { useTranslation } from 'react-i18next';
import SectionContact from './section-contact';
import SectionAbout from './section-about';
function Footer() {
  const { t } = useTranslation();
  return (
    <footer className='relative flex flex-col Scale bg-black'>
      <SectionContact />
      <SectionAbout />
    </footer>
  );
}

export default Footer;
