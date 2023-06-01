import React from 'react';
import LazyLoad from 'react-lazyload';
import netImg from '../../../images/information/v2-siem-2.582ebba760712039844a.jpg';
import { useTranslation } from 'react-i18next';
function Network() {
  const { t } = useTranslation();
  const network = [
    {
      content: t('SIEM.content8'),
    },
    {
      content: t('SIEM.content9'),
    },
    {
      content: t('SIEM.content10'),
    },
    {
      content: t('SIEM.content11'),
    },
  ];
  const contentNetwork = network.map((content, index) => {
    return (
      <li key={index} className='py-4 border-b border-b-gray flex items-center'>
        <p className='w-full'>
          <i className='fa fa-check-circle text-yellow mr-4'></i>
          {content.content}
        </p>
      </li>
    );
  });
  return (
    <div className='container m-auto flex flex-col lg:flex-row-reverse Left'>
      <div className='lg:w-1/2 flex flex-col justify-between items-center'>
        <h3 className='text-center text-xl md:text-2xl lg:text-4xl text-blue font-bold'>
          {t('SIEM.title2')}
        </h3>
        <LazyLoad offset={0} once>
          <img
            className='w-1/3 lg:w-1/2 mx-auto my-8 xl:m-auto rounded-2xl Left'
            src={netImg}
            alt={netImg}
          />
        </LazyLoad>
      </div>
      <ul className='w-4/5 m-auto lg:w-1/2 text-lg'>{contentNetwork}</ul>
    </div>
  );
}

export default Network;
