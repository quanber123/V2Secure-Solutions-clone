import React from 'react';
import { useTranslation } from 'react-i18next';
import LazyLoad from 'react-lazyload';
function Footer() {
  const { t } = useTranslation();
  return (
    <footer className='container m-auto font-bold text-lg text-center p-4 Scale'>
      <LazyLoad offset={0} once>
        {t('copyright')}
      </LazyLoad>
    </footer>
  );
}

export default Footer;
