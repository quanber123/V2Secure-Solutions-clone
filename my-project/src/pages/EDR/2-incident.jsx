import React from 'react';
import LazyLoad from 'react-lazyload';
import incidentImg from '../../images/solutions/v2-edr-2.ee17e416a2b05aad6ef4.png';
import { useTranslation } from 'react-i18next';
function Incident() {
  const { t } = useTranslation();
  const lazyLoadOptions = {
    offset: 0,
    once: true,
  };
  const incident = [
    {
      content: t('EDR.content22'),
    },
    {
      content: t('EDR.content23'),
    },
    {
      content: t('EDR.content24'),
    },
  ];
  const contentIncident = incident.map((content, index) => {
    return (
      <p key={index}>
        <i className='fa fa-circle mr-4 text-sm text-blue'></i>
        {content.content}
      </p>
    );
  });
  return (
    <LazyLoad {...lazyLoadOptions}>
      <div className='md:px-8 pt-8 Scale'>
        <LazyLoad {...lazyLoadOptions}>
          <h3 className='text-xl md:text-2xl font-bold px-3 mx-4 Scale'>
            {t('EDR.title2')}
          </h3>
          <div className='text-lg md:text-xl px-8 py-4 Scale'>
            {contentIncident}
          </div>
        </LazyLoad>
        <LazyLoad
          className='flex justify-center items-center Scale'
          {...lazyLoadOptions}
        >
          <img className='h-4/5 Scale' src={incidentImg} alt={incidentImg} />
        </LazyLoad>
      </div>
    </LazyLoad>
  );
}

export default Incident;
