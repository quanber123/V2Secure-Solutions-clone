import React from 'react';
import LazyLoad from 'react-lazyload';
import nipsImg from '../../../images/generation/v2-nips-1-1.d331557c7ae8676e6b7e.png';
import systemImg from '../../../images/generation/v2-nips-1-3.3a965cfbc9f043c3bedb.png';
import { useTranslation } from 'react-i18next';
function Networking() {
  const { t } = useTranslation();
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
        <p className='mx-4 my-2' key={index}>
          {content.content}
        </p>
      );
    }
  );
  const contentAnomalousActivity = anomalousActivity.map((content, index) => {
    return (
      <p className='mx-4 my-2' key={index}>
        {content.content}
      </p>
    );
  });
  return (
    <div className='mx-8 px-3 py-4 border-b-2 border-l-2 border-r-2 border-blue rounded-b-xl Up'>
      <h3 className='text-xl md:text-2xl font-bold px-3'>{t('NIPS.title1')}</h3>
      <div>
        <h3 className='text-lg md:text-2xl font-bold px-3 my-2'>
          {t('NIPS.idea1')}
        </h3>
        <div className=' md:text-xl'>{contentDetectionSignatures}</div>
        <LazyLoad className='flex justify-center my-4' offset={0} once>
          <img src={nipsImg} alt={nipsImg} />
        </LazyLoad>
      </div>
      <div>
        <h3 className='text-lg md:text-2xl font-bold px-3 my-2'>
          {t('NIPS.idea2')}
        </h3>
        <div className='md:text-xl'>
          {contentAnomalousActivity}
          <ul className='px-6'>
            <li>{t('NIPS.content18')}</li>
            <li>{t('NIPS.content19')}</li>
            <li>{t('NIPS.content20')}</li>
            <li>{t('NIPS.content21')}</li>
          </ul>
        </div>
      </div>
      <div>
        <h3 className='text-lg md:text-2xl font-bold px-3 my-2'>
          {t('NIPS.idea3')}
        </h3>
        <LazyLoad className='flex justify-center my-4' offset={0} once>
          <img src={systemImg} alt={systemImg} />
        </LazyLoad>
      </div>
    </div>
  );
}

export default Networking;
