import React from 'react';
import LazyLoad from 'react-lazyload';
import processingImg from '../../../images/application/v2-waf-4.c7d6d85b14a77edd59fc.png';
import { useTranslation } from 'react-i18next';
function Processing() {
  const { t } = useTranslation();
  const processing = [
    {
      content: t('WAF.content6'),
    },
    {
      content: t('WAF.content7'),
    },
    {
      content: t('WAF.content8'),
    },
  ];
  const contentProcessing = processing.map((content, index) => {
    return (
      <p className='m-4' key={index}>
        {content.content}
      </p>
    );
  });
  return (
    <div className='text-darkBlue Up'>
      <h3 className='text-xl md:text-2xl font-bold px-3 mx-4'>
        {t('WAF.title4')}
      </h3>
      <div className='text-lg md:text-xl px-3 py-4'>{contentProcessing}</div>
      <LazyLoad
        className='flex items-center justify-center w-full p-4'
        offset={0}
        once
      >
        <img className='w-full' src={processingImg} alt={processingImg} />
      </LazyLoad>
    </div>
  );
}

export default Processing;
