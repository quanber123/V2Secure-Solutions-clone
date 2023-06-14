import React from 'react';
import { useTranslation } from 'react-i18next';

function AutoMaticBlocking() {
  const { t } = useTranslation();
  const autoMaticBlocking = [
    {
      content: t('NIDS.content15'),
    },
    {
      content: t('NIDS.content16'),
    },
    {
      content: t('NIDS.content17'),
    },
    {
      content: t('NIDS.content18'),
    },
    {
      content: t('NIDS.content19'),
    },
  ];
  const contentAutoMaticBlocking = autoMaticBlocking.map((content, index) => {
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
        {t('NIDS.title4')}
      </h3>
      <ul className='font-bold'>{contentAutoMaticBlocking}</ul>
    </div>
  );
}

export default AutoMaticBlocking;
