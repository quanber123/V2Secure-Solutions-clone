import React from 'react';
import MultiTask from './1-multi-task';
import Incident from './2-incident';
import System from './3-system';
import Deployment from './4-deployment';
import LazyLoad from 'react-lazyload';
import { useTranslation } from 'react-i18next';
function EDR() {
  const { t } = useTranslation();
  const lazyLoadOptions = {
    offset: 0,
    once: true,
  };
  return (
    <section
      id='edr'
      className='container m-auto bg-white text-darkBlue rounded-2xl Scale'
    >
      <h1 className='lg:w-full w-11/12 m-auto underline text-center text-xl md:text-3xl font-bold pt-8 px-4 Scale'>
        {t('EDR.title')}
      </h1>
      <LazyLoad className='Scale' {...lazyLoadOptions}>
        <MultiTask />
      </LazyLoad>
      <LazyLoad className='Scale' {...lazyLoadOptions}>
        <Incident />
      </LazyLoad>
      <LazyLoad className='Left' {...lazyLoadOptions}>
        <System />
      </LazyLoad>
      <LazyLoad className='Right' {...lazyLoadOptions}>
        <Deployment />
      </LazyLoad>
    </section>
  );
}

export default EDR;
