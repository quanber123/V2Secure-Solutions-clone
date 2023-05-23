import React from 'react';
import LazyLoad from 'react-lazyload';
import accessImg from '../../../images/access/v2-nac-1.46f479e902710bf3fbb5.png';
import Function1 from './1-function-1';
import Function2 from './2-function-2';
import { useTranslation } from 'react-i18next';
function NAC() {
  const { t } = useTranslation();
  const lazyLoadOptions = {
    offset: 0,
    once: true,
  };
  return (
    <section
      id='nac'
      className='container m-auto bg-white text-darkBlue rounded-2xl my-12'
    >
      <LazyLoad {...lazyLoadOptions}>
        <h1 className='underline text-center text-xl md:text-3xl font-bold pt-8 px-4 Scale'>
          {t('NAC.title')}
        </h1>
      </LazyLoad>
      <LazyLoad
        className='flex justify-center items-center m-8'
        {...lazyLoadOptions}
        once
      >
        <img
          className='w-2/3 md:w-4/5 h-full Scale'
          src={accessImg}
          alt={accessImg}
        />
      </LazyLoad>
      <Function1 />
      <Function2 />
    </section>
  );
}

export default NAC;
