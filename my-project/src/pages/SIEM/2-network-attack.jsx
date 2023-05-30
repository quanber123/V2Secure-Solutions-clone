import React from 'react';
import LazyLoad from 'react-lazyload';
import netImg from '../../images/information/v2-siem-2.582ebba760712039844a.jpg';
import guard from '../../images/information/guard.png';
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
      <div key={index} className='flex my-2'>
        <LazyLoad className='w-4 mt-2 mr-4 Left' offset={0} once>
          <img src={guard} alt={guard} />
        </LazyLoad>
        <p className='w-full'>{content.content}</p>
      </div>
    );
  });
  return (
    <div className='ml-auto w-11/12 rounded-l-2xl p-8 bg-blue Left'>
      <h3 className='text-center text-white text-xl md:text-2xl mb-4 font-bold'>
        {t('SIEM.title2')}
      </h3>
      <div className='lg:flex lg:flex-row Left'>
        <LazyLoad className='w-3/4 lg:w-1/3 m-auto' offset={0} once>
          <img className='m-auto' src={netImg} alt={netImg} />
        </LazyLoad>
        <div className='lg:w-2/3 text-white text-lg md:text-xl px-3 py-4'>
          {contentNetwork}
        </div>
      </div>
    </div>
  );
}

export default Network;