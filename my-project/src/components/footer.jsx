import React from 'react';
import { useTranslation } from 'react-i18next';
function Footer() {
  const { t } = useTranslation();
  return (
    <footer className='container m-auto font-bold text-lg text-center p-4'>
      {t('copyright')}
    </footer>
  );
}

export default Footer;
