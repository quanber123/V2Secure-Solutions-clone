import React from 'react';
import { useTranslation } from 'react-i18next';

function System() {
  const { t } = useTranslation();
  return (
    <div
      className='container m-auto p-12 rounded-2xl'
      style={{
        background:
          'linear-gradient(150deg,rgba(176, 176, 176, 0.2),rgba(103, 102, 102, 0.2))',
      }}
    >
      <h3 className='hidden lg:block text-xl md:text-2xl lg:text-4xl text-center text-blue font-bold mb-8'>
        {t('NIPS.title3')}
      </h3>
      <div>
        <ul>
          <li className='py-4 border-b border-b-gray'>
            <i className='fa fa-check-circle text-yellow mr-4'></i>
            {t('NIPS.content24')}
          </li>
          <li className='py-4 border-b border-b-gray'>
            <i className='fa fa-check-circle text-yellow mr-4'></i>
            {t('NIPS.content25')}
          </li>
          <li className='py-4 border-b border-b-gray'>
            <i className='fa fa-check-circle text-yellow mr-4'></i>
            {t('NIPS.content26')}
          </li>
          <li className='py-4 border-b border-b-gray'>
            <i className='fa fa-check-circle text-yellow mr-4'></i>
            {t('NIPS.content27')}
          </li>
        </ul>
        <p className='text-xl text-center text-blue font-bold my-8'>
          {t('NIPS.content28')}
        </p>
        <ul>
          <li className='py-4 border-b border-b-gray'>
            <i className='fa fa-check-circle text-yellow mr-4'></i>
            {t('NIPS.content29')}
          </li>
          <li className='py-4 border-b border-b-gray'>
            <i className='fa fa-check-circle text-yellow mr-4'></i>
            {t('NIPS.content30')}
          </li>
          <li className='py-4 border-b border-b-gray'>
            <i className='fa fa-check-circle text-yellow mr-4'></i>
            {t('NIPS.content31')}
          </li>
          <li className='py-4 border-b border-b-gray'>
            <i className='fa fa-check-circle text-yellow mr-4'></i>
            {t('NIPS.content32')}
          </li>
          <li className='py-4 border-b border-b-gray'>
            <i className='fa fa-check-circle text-yellow mr-4'></i>
            {t('NIPS.content33')}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default System;
