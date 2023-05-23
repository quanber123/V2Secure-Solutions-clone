import React from 'react';
import LazyLoad from 'react-lazyload';
import function2Img from '../../../images/access/v2-nac-2.d2d5178610158a722098.png';
import { useTranslation } from 'react-i18next';
function Function2() {
  const { t } = useTranslation();
  return (
    <div className='rounded-xl flex justify-between Right'>
      <LazyLoad
        className='w-2/5 md:w-1/2 lg:p-40 px-4 bg-blue flex justify-center items-center'
        offset={100}
        once
      >
        <img
          className='w-full h-1/12 sm:h-1/3 lg:h-1/2'
          src={function2Img}
          alt={function2Img}
        />
      </LazyLoad>
      <div className='w-3/5 md:w-1/2 mx-4'>
        <h3 className='text-lg md:text-2xl font-bold mb-2 my-4 md:my-0'>
          {t('NAC.title2')}
        </h3>
        <div className='text-base md:text-xl text-center text-white'>
          <div className='h-full'>
            <p className='my-4 p-4 md:p-8 bg-blue rounded-xl'>
              {t('NAC.content1')}
            </p>
            <p className='my-4 p-4 md:p-8 border bg-blue rounded-xl'>
              {t('NAC.content2')}
            </p>
            <p className='my-4 p-4 md:p-8 border bg-blue rounded-xl'>
              {t('NAC.content3')}
            </p>
            <p className='my-4 p-4 md:p-8 border bg-blue rounded-xl'>
              {t('NAC.content4')}
            </p>
          </div>
          <div>
            <h3 className='text-base md:text-xl font-bold text-darkBlue'>
              {t('NAC.content5')}
            </h3>
          </div>
          <div>
            <p className='my-4 p-4 md:p-8 border bg-blue rounded-xl'>
              {t('NAC.content6')}
            </p>
            <p className='my-4 p-4 md:p-8 border bg-blue rounded-xl'>
              {t('NAC.content7')}
            </p>
            <p className='my-4 p-4 md:p-8 border bg-blue rounded-xl'>
              {t('NAC.content8')}
            </p>
            <p className='my-4 p-4 md:p-8 border bg-blue rounded-xl'>
              {t('NAC.content9')}
            </p>
            <p className='my-4 p-4 md:p-8 border bg-blue rounded-xl'>
              {t('NAC.content10')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Function2;
