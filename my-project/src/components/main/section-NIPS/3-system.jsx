import React from 'react';
import { useTranslation } from 'react-i18next';

function System() {
  const { t } = useTranslation();
  return (
    <div className='rounded-xl p-8 my-4 mx-8 Up'>
      <h3 className='text-2xl font-bold mb-2'>{t('NIPS.title3')}</h3>
      <div className='block md:flex md:flex-row md:justify-between text-xl text-center'>
        <div className='md:w-1/2 h-full'>
          <p className='m-4 p-4 border border-darkBlue rounded-xl'>
            {t('NIPS.content24')}
          </p>
          <p className='m-4 p-4 border border-darkBlue rounded-xl'>
            {t('NIPS.content25')}
          </p>
          <p className='m-4 p-4 border border-darkBlue rounded-xl'>
            {t('NIPS.content26')}
          </p>
          <p className='m-4 p-4 border border-darkBlue rounded-xl'>
            {t('NIPS.content27')}
          </p>
        </div>
        <div className='hidden md:flex justify-center items-center '>
          <p className='rotate-text font-bold text-xl'>{t('NIPS.content28')}</p>
        </div>
        <div className='md:w-1/2'>
          <p className='m-4 p-4 border border-darkBlue rounded-xl'>
            {t('NIPS.content29')}
          </p>
          <p className='m-4 p-4 border border-darkBlue rounded-xl'>
            {t('NIPS.content30')}
          </p>
          <p className='m-4 p-4 border border-darkBlue rounded-xl'>
            {t('NIPS.content31')}
          </p>
          <p className='m-4 p-4 border border-darkBlue rounded-xl'>
            {t('NIPS.content32')}
          </p>
          <p className='m-4 p-4 border border-darkBlue rounded-xl'>
            {t('NIPS.content33')}
          </p>
        </div>
      </div>
    </div>
  );
}

export default System;
