import React from 'react';
import LazyLoad from 'react-lazyload';
import systemImg from '../../../images/information/v2-siem-8.ba484ce56ada73f54a8b.png';
import { useTranslation } from 'react-i18next';
function System() {
  const { t } = useTranslation();
  const system = [
    {
      content: t('SIEM.content34'),
    },
    {
      content: t('SIEM.content35'),
    },
    {
      content: t('SIEM.content36'),
    },
    {
      content: t('SIEM.content37'),
    },
    {
      content: t('SIEM.content38'),
    },
    {
      content: t('SIEM.content39'),
    },
    {
      content: t('SIEM.content40'),
    },
    {
      content: t('SIEM.content41'),
    },
    {
      content: t('SIEM.content42'),
    },
  ];
  const contentSystem = system.map((content, index) => {
    return (
      <p className='my-4' key={index}>
        {content.content}
      </p>
    );
  });
  return (
    <div className='ml-auto w-11/12 rounded-tl-2xl p-8 bg-blue Left'>
      <h3 className='px-3 text-white text-xl md:text-2xl font-bold'>
        {t('SIEM.title8')}
      </h3>
      <div className='flex flex-col md:flex-row items-center'>
        <div className='md:w-2/3 text-white text-lg md:text-xl px-3 py-4'>
          {contentSystem}
        </div>
        <LazyLoad className='md:w-1/3 Left' offset={100} once>
          <img className='w-4/5 m-auto' src={systemImg} alt={systemImg} />
        </LazyLoad>
      </div>
    </div>
  );
}

export default System;
