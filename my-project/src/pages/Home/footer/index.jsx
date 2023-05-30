import React from 'react';
import { useTranslation } from 'react-i18next';
import LazyLoad from 'react-lazyload';
import About from '../../About';
function Footer() {
  const { t } = useTranslation();
  return (
    <footer className='container mx-auto my-16 p-4 Scale'>
      <About />
      <LazyLoad className='font-bold text-lg text-center ' offset={0} once>
        {t('copyright')}
      </LazyLoad>
    </footer>
  );
}

export default Footer;
