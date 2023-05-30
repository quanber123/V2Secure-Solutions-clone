import React from 'react';
import { useTranslation } from 'react-i18next';
import LazyLoad from 'react-lazyload';
function System() {
  const lazyLoadOptions = {
    offset: 0,
    once: true,
  };
  const { t } = useTranslation();
  return (
    <LazyLoad {...lazyLoadOptions}>
      <div className='ml-auto w-11/12 rounded-tl-2xl p-8 bg-blue Left'>
        <LazyLoad {...lazyLoadOptions}>
          <h3 className='px-3 md:m-2 text-white text-lg md:text-2xl font-bold text-center Left'>
            {t('EDR.title3')}
          </h3>
        </LazyLoad>
        <LazyLoad {...lazyLoadOptions}>
          <div className='md:flex md:flex-grow justify-between text-base md:text-xl text-center text-white Left'>
            <div className='md:w-1/2 h-full Left'>
              <p className='m-4 p-4 border border-white rounded-xl'>
                {t('EDR.content25')}
              </p>
              <p className='m-4 p-4 border border-white rounded-xl'>
                {t('EDR.content26')}
              </p>
              <p className='m-4 p-4 border border-white rounded-xl'>
                {t('EDR.content27')}
              </p>
              <p className='m-4 p-4 border border-white rounded-xl'>
                {t('EDR.content28')}
              </p>
            </div>
            <div className='md:w-1/2 Left'>
              <p className='m-4 p-4 border border-white rounded-xl'>
                {t('EDR.content29')}
              </p>
              <p className='m-4 p-4 border border-white rounded-xl'>
                {t('EDR.content30')}
              </p>
              <p className='m-4 p-4 border border-white rounded-xl'>
                {t('EDR.content31')}
              </p>
              <p className='m-4 p-4 border border-white rounded-xl'>
                {t('EDR.content32')}
              </p>
              <p className='m-4 p-4 border border-white rounded-xl'>
                {t('EDR.content33')}
              </p>
            </div>
          </div>
        </LazyLoad>
      </div>
    </LazyLoad>
  );
}

export default System;