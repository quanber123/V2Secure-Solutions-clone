import React from 'react';
import { useTranslation } from 'react-i18next';

function System() {
  const { t } = useTranslation();
  return (
    <div className='rounded-xl bg-blue text-white p-8 my-4 mx-8 Left'>
      <h3 className='text-lg md:text-2xl font-bold mb-2'>{t('WAF.title7')}</h3>
      <div className='flex flex-col md:flex-row lg:justify-between text-lg md:text-xl md:text-sm text-center'>
        <div className='md:w-1/2 h-full'>
          <p className='full m-4 p-4 border border-white rounded-xl'>
            {t('WAF.content31')}
          </p>
          <p className='m-4 p-4 border border-white rounded-xl'>
            {t('WAF.content32')}
          </p>
          <p className='m-4 p-4 border border-white rounded-xl'>
            {t('WAF.content33')}
          </p>
        </div>
        <div className='md:w-1/2'>
          <p className='m-4 p-4 border border-white rounded-xl'>
            {t('WAF.content34')}
          </p>
          <p className='m-4 p-4 border border-white rounded-xl'>
            {t('WAF.content35')}
          </p>
          <p className='m-4 p-4 border border-white rounded-xl'>
            {t('WAF.content36')}
          </p>
          <p className='m-4 p-4 border border-white rounded-xl'>
            {t('WAF.content37')}
          </p>
          <p className='m-4 p-4 border border-white rounded-xl'>
            {t('WAF.content38')}
          </p>
        </div>
      </div>
    </div>
  );
}

export default System;
