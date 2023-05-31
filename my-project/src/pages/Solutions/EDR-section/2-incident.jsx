import React from 'react';
import LazyLoad from 'react-lazyload';
import incidentImg from '../../../images/solutions/v2-edr-2.ee17e416a2b05aad6ef4.png';
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
      <li key={index} className='py-6 border-b border-b-gray flex items-center'>
        <p className='w-full'>
          <i className='fa fa-check-circle text-yellow mr-4'></i>
          {content.content}
        </p>
      </li>
    );
  });
  return (
    <div className='container m-auto flex'>
      <div className='w-1/2 flex flex-col justify-between items-center'>
        <h3 className='w-4/5 m-auto text-center text-4xl text-blue font-bold'>
          {t('EDR.title2')}
        </h3>
        <LazyLoad className='w-4/5 m-auto my-4' {...lazyLoadOptions}>
          <img className='rounded-2xl' src={incidentImg} alt={incidentImg} />
        </LazyLoad>
      </div>
      <ul className='w-1/2 text-lg'>{contentIncident}</ul>
    </div>
  );
}

export default Incident;