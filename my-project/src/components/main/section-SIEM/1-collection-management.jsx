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
    <div className='md:p-8 Right'>
      <h3 className='m-4 text-center text-xl md:text-2xl font-bold'>
        {t('SIEM.title1')}
      </h3>
      <div className='px-8 py-4 flex flex-col lg:flex-row lg:justify-between'>
        <div className='lg:w-2/3 w-full'>
          <h4 className='font-bold text-xl md:text-2xl'>
            <i className='fa fa-stop -ml-2 mr-2'></i>
            {t('SIEM.idea1')}
          </h4>
          <div className='border-l-2  pl-4 pb-4 text-lg md:text-xl'>
            {contentCollecting}
          </div>
          <h4 className='font-bold text-xl md:text-2xl'>
            <i className='fa fa-stop -ml-2 mr-2'></i>
            {t('SIEM.idea2')}
          </h4>
          <div className='pl-4 text-lg md:text-xl'>{contentAutomatic}</div>
        </div>
        <LazyLoad className='lg:w-1/3 w-full m-auto Right' offset={100} once>
          <img className='m-auto' src={logImg} alt={logImg} />
        </LazyLoad>
      </div>
    </div>
  );
}

export default Collections;
