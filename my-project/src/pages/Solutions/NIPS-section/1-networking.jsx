import React from 'react';
import LazyLoad from 'react-lazyload';
import nipsImg from '../../../images/generation/v2-nips-1-1.d331557c7ae8676e6b7e.png';
import systemImg from '../../../images/generation/v2-nips-1-3.3a965cfbc9f043c3bedb.png';
import { useTranslation } from 'react-i18next';
function Networking() {
  const { t } = useTranslation();
  const lazyLoadOptions = {
    offset: 0,
    once: true,
  };
  const detectionSignatures = [
    {
      content: t('NIPS.content1'),
    },
    {
      content: t('NIPS.content2'),
    },
    {
      content: t('NIPS.content3'),
    },
    {
      content: t('NIPS.content4'),
    },
    {
      content: t('NIPS.content5'),
    },
    {
      content: t('NIPS.content6'),
    },
    {
      content: t('NIPS.content7'),
    },
    {
      content: t('NIPS.content8'),
    },
    {
      content: t('NIPS.content9'),
    },
    {
      content: t('NIPS.content10'),
    },
    {
      content: t('NIPS.content11'),
    },
    {
      content: t('NIPS.content12'),
    },
    {
      content: t('NIPS.content13'),
    },
    {
      content: t('NIPS.content14'),
    },
  ];
  const anomalousActivity = [
    {
      content: t('NIPS.content15'),
    },
    {
      content: t('NIPS.content16'),
    },
    {
      content: t('NIPS.content17'),
    },
  ];
  const contentDetectionSignatures = detectionSignatures.map(
    (content, index) => {
      return (
        <li className='py-4 border-b border-b-gray' key={index}>
          <i className='fa fa-check-circle text-yellow mr-4'></i>
          {content.content}
        </li>
      );
    }
  );
  const contentAnomalousActivity = anomalousActivity.map((content, index) => {
    return (
      <li className='py-4' key={index}>
        <i className='fa fa-check-circle text-yellow mr-4'></i>
        {content.content}
      </li>
    );
  });
  return (
    <div className='bg-black mt-32 pb-32 Up'>
      <div className='container m-auto flex flex-col xl:flex-row-reverse my-8 items-center'>
        <h3 className='xl:w-1/2 text-center text-xl md:text-2xl lg:text-4xl text-blue font-bold'>
          {t('NIPS.title1')}
        </h3>
        <LazyLoad className='xl:w-1/2 my-8 xl:my-0' {...lazyLoadOptions}>
          <img
            className='w-1/2 m-auto rounded-2xl Up'
            src={nipsImg}
            alt='nips-img'
          />
        </LazyLoad>
      </div>
      <div className='container m-auto flex flex-col xl:flex-row pb-32 lg:pb-64'>
        <div
          className='xl:w-1/2 p-12 mx-8 rounded-2xl'
          style={{
            background:
              'linear-gradient(150deg,rgba(176, 176, 176, 0.2),rgba(103, 102, 102, 0.2))',
          }}
        >
          <h3 className='text-lg text-blue font-bold'>{t('NIPS.idea1')}</h3>
          <ul>{contentDetectionSignatures}</ul>
        </div>
        <div
          className='xl:w-1/2 p-12 mx-8 rounded-2xl my-8 xl:my-0'
          style={{
            background:
              'linear-gradient(150deg,rgba(176, 176, 176, 0.2),rgba(103, 102, 102, 0.2))',
          }}
        >
          <h3 className='text-lg text-blue font-bold'>{t('NIPS.idea2')}</h3>
          <ul>{contentAnomalousActivity}</ul>
          <ul className='px-6 Scale'>
            <li className='py-2 border-b border-b-gray'>
              <i
                className='fa fa-warning text-yellow mr-4'
                style={{ color: 'red' }}
              ></i>
              {t('NIPS.content18')}
            </li>
            <li className='py-2 border-b border-b-gray'>
              <i
                className='fa fa-warning text-yellow mr-4'
                style={{ color: 'red' }}
              ></i>
              {t('NIPS.content19')}
            </li>
            <li className='py-2 border-b border-b-gray'>
              <i
                className='fa fa-warning text-yellow mr-4'
                style={{ color: 'red' }}
              ></i>
              {t('NIPS.content20')}
            </li>
            <li className='py-2 border-b border-b-gray'>
              <i
                className='fa fa-warning text-yellow mr-4'
                style={{ color: 'red' }}
              ></i>
              {t('NIPS.content21')}
            </li>
          </ul>
        </div>
      </div>
      <div className='container m-auto flex flex-col lg:flex-row items-center'>
        <h3 className='lg:w-1/2 text-xl text-center text-blue font-bold'>
          {t('NIPS.idea3')}
        </h3>
        <LazyLoad className='w-1/2 my-8 lg:my-0' {...lazyLoadOptions}>
          <img className='rounded-2xl Up' src={systemImg} alt='system-img' />
        </LazyLoad>
      </div>
    </div>
  );
}

export default Networking;
