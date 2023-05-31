import React from 'react';
import LazyLoad from 'react-lazyload';
import guard from '../../../images/information/guardblack.png';
import { useTranslation } from 'react-i18next';
function Security() {
  const { t } = useTranslation();
  const security = [
    {
      content: t('SIEM.content27'),
    },
    {
      content: t('SIEM.content28'),
    },
    {
      content: t('SIEM.content29'),
    },
  ];
  const contentSecurity = security.map((content, index) => {
    return (
      <li key={index} className='flex border-b py-8 border-b-gray'>
        <div className='bg-yellow text-black text-xl text-center w-14 h-14 p-2 mr-4 rounded-md flex justify-center items-center'>
          0{index + 1}
        </div>
        <p className='w-11/12 ml-auto'>{content.content}</p>
      </li>
    );
  });
  return (
    <div className='container m-auto flex flex-col xl:flex-row justify-between'>
      <h3 className='xl:w-1/2 text-xl md:text-2xl lg:text-4xl text-center text-blue font-bold py-8'>
        {t('SIEM.title6')}
      </h3>
      <ul className='xl:w-1/2 font-bold text-base lg:text-lg'>
        {contentSecurity}
      </ul>
    </div>
  );
}

export default Security;
