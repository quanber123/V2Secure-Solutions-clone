import React from 'react';
import LazyLoad from 'react-lazyload';
import guard from '../../../images/information/guardblack.png';
import { useTranslation } from 'react-i18next';
function Incident() {
  const { t } = useTranslation();
  const incident = [
    {
      content: t('SIEM.content30'),
    },
    {
      content: t('SIEM.content31'),
    },
    {
      content: t('SIEM.content32'),
    },
    {
      content: t('SIEM.content33'),
    },
  ];
  const contentIncident = incident.map((content, index) => {
    return (
      <div key={index} className='flex my-2'>
        <LazyLoad className='w-4 mt-2 mr-4' offset={100} once>
          <img src={guard} alt={guard} />
        </LazyLoad>
        <p className='w-full font-semibold'>{content.content}</p>
      </div>
    );
  });
  return (
    <div className='text-darkBlue Right'>
      <h3 className='text-2xl font-bold px-3'>{t('SIEM.title7')}</h3>
      <div className='text-xl px-3 py-4'>{contentIncident}</div>
    </div>
  );
}

export default Incident;
