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
      <li key={index} className='flex py-8 border-b border-b-gray'>
        <div className='bg-yellow text-black text-xl text-center w-14 h-14 p-2 mr-4 rounded-md flex justify-center items-center'>
          0{index + 1}
        </div>
        <p className='w-11/12 ml-auto'>{content.content}</p>
      </li>
    );
  });
  return (
    <div className='container m-auto flex justify-between flex-row-reverse'>
      <h3 className='w-1/2 text-4xl text-center text-blue font-bold py-8'>
        {t('SIEM.title7')}
      </h3>
      <ul className='w-1/2 font-bold'>{contentIncident}</ul>
    </div>
  );
}

export default Incident;
