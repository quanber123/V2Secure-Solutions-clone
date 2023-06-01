import React from 'react';
import { useTranslation } from 'react-i18next';

function System() {
  const { t } = useTranslation();
  const systems = [
    {
      content: t('WAF.content31'),
    },
    {
      content: t('WAF.content32'),
    },
    {
      content: t('WAF.content33'),
    },
    {
      content: t('WAF.content34'),
    },
    {
      content: t('WAF.content35'),
    },
    {
      content: t('WAF.content36'),
    },
    {
      content: t('WAF.content37'),
    },
    {
      content: t('WAF.content38'),
    },
  ];
  const contentSystems = systems.map((content, index) => {
    return (
      <li key={index} className='flex border-b py-8 border-b-gray'>
        <p className='w-11/12'>{content.content}</p>
        <div className='bg-yellow text-black text-xl text-center w-14 h-14 p-2 ml-auto rounded-md flex justify-center items-center'>
          0{index + 1}
        </div>
      </li>
    );
  });
  return (
    <div className='container m-auto Up'>
      <h3 className='text-xl md:text-2xl lg:text-4xl text-center text-blue font-bold mb-8'>
        {t('WAF.title7')}
      </h3>
      <ul className='font-bold'>{contentSystems}</ul>
    </div>
  );
}

export default System;
