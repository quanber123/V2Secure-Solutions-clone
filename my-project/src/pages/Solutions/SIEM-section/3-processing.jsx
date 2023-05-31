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
      <li className='py-4' key={index}>
        <i className='fa fa-check-circle text-yellow mr-4'></i>
        {content.content}
      </li>
    );
  });
  return (
    <div className='lg:w-1/2 px-18 xl:px-32'>
      <h3 className='my-8 text-xl md:text-2xl lg:text-4xl text-center text-blue font-bold'>
        {t('SIEM.title3')}
      </h3>
      <div>
        <ul>{contentProcessing}</ul>
        <ul className='mx-4'>
          <li className='py-2 border-b border-b-gray'>
            <i
              className='fa fa-warning text-yellow mr-4'
              style={{ color: 'red' }}
            ></i>
            {t('SIEM.content15')}
          </li>
          <li className='py-2 border-b border-b-gray'>
            <i
              className='fa fa-warning text-yellow mr-4'
              style={{ color: 'red' }}
            ></i>
            {t('SIEM.content16')}
          </li>
          <li className='py-2 border-b border-b-gray'>
            <i
              className='fa fa-warning text-yellow mr-4'
              style={{ color: 'red' }}
            ></i>
            {t('SIEM.content17')}
          </li>
          <li className='py-2 border-b border-b-gray'>
            <i
              className='fa fa-warning text-yellow mr-4'
              style={{ color: 'red' }}
            ></i>
            {t('SIEM.content18')}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Processing;
