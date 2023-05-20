import React from 'react';
import { useTranslation } from 'react-i18next';
import LazyLoad from 'react-lazyload';
function Footer() {
  const { t } = useTranslation();
  return (
    <LazyLoad offset={100} once>
      <footer className='container m-auto font-bold text-lg text-center p-4 Scale'>
        {t('copyright')}
      </footer>
    </LazyLoad>
  );
}

export default Footer;
