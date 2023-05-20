import React from 'react';
import MultiTask from './EDR/multi-task';
import Incident from './EDR/incident';
import System from './EDR/system';
import Deployment from './EDR/deployment';
import LazyLoad from 'react-lazyload';
import { useTranslation } from 'react-i18next';
function EDR() {
  const { t } = useTranslation();
  const lazyLoadOptions = {
    offset: 100,
    once: true,
  };
  return (
    <section
      id='edr'
      className='container m-auto bg-white text-darkBlue rounded-2xl'
    >
      <LazyLoad {...lazyLoadOptions}>
        <h1 className='underline text-center text-2xl font-bold pt-8 px-4 Scale'>
          {t('EDR.title')}
        </h1>
      </LazyLoad>
      <LazyLoad {...lazyLoadOptions}>
        <MultiTask />
      </LazyLoad>
      <LazyLoad {...lazyLoadOptions}>
        <Incident />
      </LazyLoad>
      <LazyLoad {...lazyLoadOptions}>
        <System />
      </LazyLoad>
      <LazyLoad {...lazyLoadOptions}>
        <Deployment />
      </LazyLoad>
    </section>
  );
}

export default EDR;
