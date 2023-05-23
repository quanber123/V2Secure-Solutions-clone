import React from 'react';
import LazyLoad from 'react-lazyload';
import guard from '../../../images/information/guardblack.png';
import { useTranslation } from 'react-i18next';
function Security() {
  const { t } = useTranslation();
  const security = [
    {
      content: t('SIEM.content27'),
    },
    {
      content: t('SIEM.content28'),
    },
    {
      content: t('SIEM.content29'),
    },
  ];
  const contentSecurity = security.map((content, index) => {
    return (
      <div key={index} className='flex my-2'>
        <LazyLoad className='w-4 h-4 mt-2 mr-4 Right' offset={100} once>
          <img src={guard} alt={guard} />
        </LazyLoad>
        <p className='w-full'>{content.content}</p>
      </div>
    );
  });
  return (
    <div className='text-darkBlue Right'>
      <h3 className='text-xl md:text-2xl font-bold px-3'>{t('SIEM.title6')}</h3>
      <div className='text-lg md:text-xl px-3 py-4'>{contentSecurity}</div>
    </div>
  );
}

export default Security;
