import React from 'react';
import Networking from './1-networking';
import Cyber from './2-cyber';
import System from './3-system';
import LazyLoad from 'react-lazyload';
import { useTranslation } from 'react-i18next';
import nipsLogo from '../../../images/ecosystem/nips.png';
function NIPS() {
  const { t } = useTranslation();
  const lazyLoadOptions = {
    offset: 0,
    once: true,
  };
  return (
    <section>
      <h1 className='w-32 m-auto py-2 px-4 text-blue text-center rounded-xl border border-lightGray'>
        V2-NIPS
      </h1>
      <h2 className='w-1/2 mx-auto my-8 text-4xl text-center font-bold'>
        {t('NIPS.title')}
      </h2>
      <LazyLoad {...lazyLoadOptions}>
        <img className='m-auto' src={nipsLogo} alt='nips-logo' />
      </LazyLoad>
      <LazyLoad className='bg-black' {...lazyLoadOptions}>
        <Networking />
      </LazyLoad>
      <LazyLoad className='bg-black pb-64' {...lazyLoadOptions}>
        <Cyber />
      </LazyLoad>
      <LazyLoad className='bg-black' {...lazyLoadOptions}>
        <System />
      </LazyLoad>
    </section>
  );
}

export default NIPS;
