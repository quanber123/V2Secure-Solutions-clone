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
      <li className='py-4 border-b border-b-gray flex' key={index}>
        <p>{content.content}</p>
        <i className='fa fa-check text-green ml-auto'></i>
      </li>
    );
  });
  return (
    <div className='container m-auto Right'>
      <h3 className='w-5/6 xl:w-4/5 m-auto py-12 text-xl md:text-2xl lg:text-4xl text-center text-blue font-bold border-t border-t-gray'>
        {t('SIEM.title8')}
      </h3>
      <div className='flex flex-col lg:flex-row py-12'>
        <ul className='lg:w-2/3 font-bold'>{contentSystem}</ul>
        <LazyLoad
          className='lg:w-1/3 my-4 lg:my-0 flex justify-center items-center'
          offset={100}
          once
        >
          <img className='w-1/4 lg:w-2/3' src={systemImg} alt='system-img' />
        </LazyLoad>
      </div>
    </div>
  );
}

export default System;
