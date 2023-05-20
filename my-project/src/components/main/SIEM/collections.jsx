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
      <p key={index}>
        ({index + 1}) {content.content}
      </p>
    );
  });
  const contentAutomatic = automatic.map((content, index) => {
    return (
      <p key={index}>
        ({index + 1}) {content.content}
      </p>
    );
  });
  return (
    <div className='p-8'>
      <h3 className='text-center text-xl font-bold'>{t('SIEM.title1')}</h3>
      <div className='p-8 lg:flex justify-between lg:flex-grow'>
        <div className='lg:w-2/3'>
          <h4 className='font-bold text-xl'>
            <i className='fa fa-stop -ml-2 mr-2'></i>
            {t('SIEM.idea1')}
          </h4>
          <div className='border-l-2  pl-4 pb-4 text-lg'>
            {contentCollecting}
          </div>
          <h4 className='font-bold text-xl'>
            <i className='fa fa-stop -ml-2 mr-2'></i>
            {t('SIEM.idea2')}
          </h4>
          <div className='pl-4 text-lg'>{contentAutomatic}</div>
        </div>
        <LazyLoad className='lg:w-1/3' offset={100} once>
          <img className='w-full h-full' src={logImg} alt={logImg} />
        </LazyLoad>
      </div>
    </div>
  );
}

export default Collections;
