import React from 'react';
import LazyLoad from 'react-lazyload';
import minimumImg from '../../images/application/download.png';
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
        <h4 className='font-medium'>{content.content}</h4>
      </div>
    );
  });
  return (
    <div className='Right'>
      <LazyLoad offset={0} once>
        <h3 className='text-xl md:text-2xl font-bold px-8 py-4 md:p-8 md:mb-2 md:mx-8 Right'>
          {t('WAF.title8')}
        </h3>
      </LazyLoad>
      <LazyLoad offset={0} once>
        <div className='flex flex-col md:flex-row Right'>
          <div className='w-full lg:w-2/3 h-full text-lg px-3 py-4'>
            {contentMinimum}
          </div>
          <LazyLoad className='md:w-1/2 p-4 m-auto' offset={0} once>
            <img className='md:w-3/4 Right' src={minimumImg} alt={minimumImg} />
          </LazyLoad>
        </div>
      </LazyLoad>
    </div>
  );
}

export default Minimum;
