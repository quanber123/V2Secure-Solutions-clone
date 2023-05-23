import React from 'react';
import { useTranslation } from 'react-i18next';

function System() {
  const { t } = useTranslation();
  return (
    <div className='ml-auto w-11/12 rounded-tl-2xl p-8 bg-blue Left'>
      <h3 className='px-3 md:m-2 text-white text-2xl font-bold text-center'>
        {t('EDR.title3')}
      </h3>
      <div className='md:flex md:flex-grow justify-between text-xl text-center text-white'>
        <div className='md:w-1/2 h-full'>
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
        <div className='md:w-1/2'>
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
    </div>
  );
}

export default System;
