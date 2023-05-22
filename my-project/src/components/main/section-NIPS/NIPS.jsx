import React from 'react';
import Networking from './1-networking';
import Cyber from './2-cyber';
import System from './3-system';
import LazyLoad from 'react-lazyload';
import { useTranslation } from 'react-i18next';
function NIPS() {
  const { t } = useTranslation();
  const lazyLoadOptions = {
    offset: 100,
    once: true,
  };
  return (
    <section
      id='nips'
      className='container m-auto bg-white text-darkBlue rounded-2xl my-12'
    >
      <LazyLoad {...lazyLoadOptions}>
        <h1 className='underline text-center text-2xl font-bold pt-8 px-4 mb-3 Up'>
          {t('NIPS.title')}
        </h1>
      </LazyLoad>
      <LazyLoad {...lazyLoadOptions}>
        <Networking />
      </LazyLoad>
      <LazyLoad {...lazyLoadOptions}>
        <Cyber />
      </LazyLoad>
      <LazyLoad {...lazyLoadOptions}>
        <System />
      </LazyLoad>
    </section>
  );
}

export default NIPS;
