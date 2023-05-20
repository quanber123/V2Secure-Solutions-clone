import React from 'react';
import LazyLoad from 'react-lazyload';
import cyberImg from '../../../images/generation/download.png';
import { useTranslation } from 'react-i18next';
function Cyber() {
  const { t } = useTranslation();
  return (
    <div className='bg-blue text-white p-8 my-8'>
      <h3 className='text-xl font-bold my-2'>{t('NIPS.title2')}</h3>
      <ul className='text-lg px-8'>
        <li>{t('NIPS.content22')}</li>
        <li>{t('NIPS.content23')}</li>
      </ul>
      <LazyLoad className='flex justify-center my-8' offset={100} once>
        <img src={cyberImg} alt={cyberImg} />
      </LazyLoad>
    </div>
  );
}

export default Cyber;
