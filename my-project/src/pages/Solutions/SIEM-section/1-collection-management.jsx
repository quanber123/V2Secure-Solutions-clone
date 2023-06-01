import React from 'react';
import LazyLoad from 'react-lazyload';
import logImg from '../../../images/information/v2-siem-1.34657cc7dee593f2419b.png';
import { useTranslation } from 'react-i18next';
function Collections() {
  const { t } = useTranslation();
  const collecting = [
    {
      id: 1,
      content: t('SIEM.content1'),
    },
    {
      id: 2,
      content: t('SIEM.content2'),
    },
    {
      id: 3,
      content: t('SIEM.content3'),
    },
    {
      id: 4,
      content: t('SIEM.content4'),
    },
    {
      id: 5,
      content: t('SIEM.content5'),
    },
  ];
  const automatic = [
    {
      id: 1,
      content: t('SIEM.content6'),
    },
    {
      id: 2,
      content: t('SIEM.content7'),
    },
  ];
  const contentCollecting = collecting.map((content, index) => {
    return (
      <li className='py-4 border-b border-b-gray' key={index}>
        <i className='fa fa-check-circle text-yellow mr-4'></i>
        {content.content}
      </li>
    );
  });
  const contentAutomatic = automatic.map((content, index) => {
    return (
      <li className='py-4 border-b border-b-gray' key={index}>
        <i className='fa fa-check-circle text-yellow mr-4'></i>
        {content.content}
      </li>
    );
  });
  return (
    <div className='container h-full mx-auto mt-32 md:mt-64 flex flex-col lg:flex-row items-stretch justify-between Up'>
      <div className='lg:w-1/2'>
        <h3 className='my-8 lg:my-0 text-lg md:text-2xl lg:text-4xl text-center lg:text-start text-blue font-bold'>
          {t('SIEM.title1')}
        </h3>
        <LazyLoad offset={100} once>
          <img className='mt-32 mx-auto lg:mx-0' src={logImg} alt={logImg} />
        </LazyLoad>
      </div>
      <div
        className='lg:w-1/2 h-full p-12 rounded-2xl'
        style={{
          background:
            'linear-gradient(150deg,rgba(176, 176, 176, 0.2),rgba(103, 102, 102, 0.2))',
        }}
      >
        <h4 className='font-bold text-lg text-blue'>{t('SIEM.idea1')}</h4>
        <ul>{contentCollecting}</ul>
        <h4 className='font-bold text-lg mt-4 text-blue'>{t('SIEM.idea2')}</h4>
        <ul>{contentAutomatic}</ul>
      </div>
    </div>
  );
}

export default Collections;
