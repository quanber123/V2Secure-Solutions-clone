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
      <li key={index} className='flex border-b py-8 border-b-gray'>
        <div className='bg-yellow text-black text-xl text-center w-14 h-14 p-2 mr-4 rounded-md flex justify-center items-center'>
          0{index + 1}
        </div>
        <p className='w-11/12 ml-auto'>{content.content}</p>
      </li>
    );
  });
  return (
    <div className='container m-auto flex flex-col xl:flex-row justify-between'>
      <div className='xl:w-1/2'>
        <h3 className='text-xl md:text-2xl lg:text-4xl text-center xl:text-start text-blue font-bold py-8'>
          {t('WAF.title4')}
        </h3>
        <LazyLoad offset={0} once>
          <img
            className='w-1/2 m-auto xl:w-auto rounded-2xl'
            src={processingImg}
            alt={processingImg}
          />
        </LazyLoad>
      </div>
      <ul className='xl:w-1/2'>{contentProcessing}</ul>
    </div>
  );
}

export default Processing;
