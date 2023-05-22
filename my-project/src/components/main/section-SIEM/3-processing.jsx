import React from 'react';
import { useTranslation } from 'react-i18next';

function Processing() {
  const { t } = useTranslation();
  const processing = [
    {
      content: t('SIEM.content12'),
    },
    {
      content: t('SIEM.content13'),
    },
    {
      content: t('SIEM.content14'),
    },
  ];
  const contentProcessing = processing.map((content, index) => {
    return (
      <p className='m-4' key={index}>
        <i className='fa fa-hand-o-right mr-4'></i>
        {content.content}
      </p>
    );
  });
  return (
    <div className='Scale'>
      <h3 className='text-center text-white text-xl font-bold'>
        {t('SIEM.title3')}
      </h3>
      <div className='text-white text-lg'>
        <div className='px-4'>{contentProcessing}</div>
        <ul>
          <li className='px-12'>{t('SIEM.content15')}</li>
          <li className='px-12'>{t('SIEM.content16')}</li>
          <li className='px-12'>{t('SIEM.content17')}</li>
          <li className='px-12'>{t('SIEM.content18')}</li>
        </ul>
      </div>
    </div>
  );
}

export default Processing;
