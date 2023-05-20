import React from 'react';
import LazyLoad from 'react-lazyload';
import minimumImg from '../../../images/application/download.png';
import { useTranslation } from 'react-i18next';
function Minimum() {
  const { t } = useTranslation();
  const minimum = [
    {
      content: t('WAF.content39'),
    },
    {
      content: t('WAF.content40'),
    },
    {
      content: t('WAF.content41'),
    },
    {
      content: t('WAF.content42'),
    },
    {
      content: t('WAF.content43'),
    },
    {
      content: t('WAF.content44'),
    },
  ];
  const contentMinimum = minimum.map((content, index) => {
    return (
      <div className='m-4 flex items-center' key={index}>
        <div className='w-16 h-4 bg-blue rounded-r-2xl text-blue mr-2'></div>
        <h4 className='font-semibold'>{content.content}</h4>
      </div>
    );
  });
  return (
    <div className='Right'>
      <h3 className='text-xl font-bold p-8 mb-2 mx-8'>{t('WAF.title8')}</h3>
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:w-2/3 text-lg px-3 py-4'>{contentMinimum}</div>
        <LazyLoad className='lg:w-1/3 p-4 lg:m-4 m-auto' offset={100} once>
          <img className='lg:w-3/4' src={minimumImg} alt={minimumImg} />
        </LazyLoad>
      </div>
    </div>
  );
}

export default Minimum;
