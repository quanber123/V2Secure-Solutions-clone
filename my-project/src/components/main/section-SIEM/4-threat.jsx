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
      <p className='m-4' key={index}>
        <i className='fa fa-hand-o-right mr-4'></i>
        {content.content}
      </p>
    );
  });
  return (
    <div className='Scale'>
      <h3 className='text-center text-white text-2xl font-bold'>
        {t('SIEM.title4')}
      </h3>
      <div className='text-white text-xl'>{contentThreat}</div>
    </div>
  );
}

export default Threat;
