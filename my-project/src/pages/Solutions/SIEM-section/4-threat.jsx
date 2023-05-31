import React from 'react';
import { useTranslation } from 'react-i18next';

function Threat() {
  const { t } = useTranslation();
  const threat = [
    {
      content: t('SIEM.content19'),
    },
    {
      content: t('SIEM.content20'),
    },
    {
      content: t('SIEM.content21'),
    },
    {
      content: t('SIEM.content22'),
    },
  ];
  const contentThreat = threat.map((content, index) => {
    return (
      <li className='py-4' key={index}>
        <i className='fa fa-check-circle text-yellow mr-4'></i>
        {content.content}
      </li>
    );
  });
  return (
    <div className='w-1/2 px-32'>
      <h3 className='my-8 text-4xl text-center text-blue font-bold'>
        {t('SIEM.title4')}
      </h3>
      <ul className=''>{contentThreat}</ul>
    </div>
  );
}

export default Threat;