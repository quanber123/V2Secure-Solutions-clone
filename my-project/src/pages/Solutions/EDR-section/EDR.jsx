import React from 'react';
import MultiTask from './1-multi-task';
import Incident from './2-incident';
import System from './3-system';
import Deployment from './4-deployment';
import { useTranslation } from 'react-i18next';
import LazyLoad from 'react-lazyload';
import edrLogo from '../../../images/ecosystem/edr.png';
function EDR() {
  const { t } = useTranslation();
  const lazyLoadOptions = {
    offset: 0,
    once: true,
  };
  return (
    <section>
      <h1 className='hidden lg:block w-32 m-auto my-4 md:my-0 py-2 px-4 text-blue text-center rounded-xl border border-lightGray'>
        V2-NIPS
      </h1>
      <h2 className='md:w-1/2 mx-auto md:py-8 text-lg md:text-2xl lg:text-4xl text-center font-bold'>
        {t('EDR.title')}
      </h2>
      <LazyLoad {...lazyLoadOptions}>
        <img className='mx-auto my-2 md:m-auto' src={edrLogo} alt='edr-logo' />
      </LazyLoad>
      <LazyLoad className='bg-black pb-32 lg:pb-64' {...lazyLoadOptions}>
        <MultiTask />
      </LazyLoad>
      <LazyLoad className='bg-black pb-32 lg:pb-64' {...lazyLoadOptions}>
        <Incident />
      </LazyLoad>
      <LazyLoad className='bg-black pb-32 lg:pb-64' {...lazyLoadOptions}>
        <System />
      </LazyLoad>
      <LazyLoad className='bg-black' {...lazyLoadOptions}>
        <Deployment />
      </LazyLoad>
    </section>
  );
}

export default EDR;
