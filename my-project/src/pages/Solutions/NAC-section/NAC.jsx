import React from 'react';
import LazyLoad from 'react-lazyload';
import Function1 from './1-function-1';
import Function2 from './2-function-2';
import { useTranslation } from 'react-i18next';
import nacLogo from '../../../images/ecosystem/nac.png';
function NAC() {
  const { t } = useTranslation();
  const lazyLoadOptions = {
    offset: 0,
    once: true,
  };
  return (
    <section>
      <h1 className='hidden lg:block w-32 m-auto my-4 md:my-0 py-2 px-4 text-blue text-center rounded-xl border border-lightGray Scale'>
        V2-NAC
      </h1>
      <h2 className='md:w-1/2 mx-auto md:py-8 text-lg md:text-2xl lg:text-4xl text-center font-bold Scale'>
        {t('NAC.title')}
      </h2>
      <LazyLoad {...lazyLoadOptions} once>
        <img
          className='mx-auto my-2 md:m-auto Scale'
          src={nacLogo}
          alt='nac-logo'
        />
      </LazyLoad>
      <LazyLoad className='bg-black pb-32 lg:pb-64' {...lazyLoadOptions}>
        <Function1 />
      </LazyLoad>
      <LazyLoad className='bg-black' {...lazyLoadOptions}>
        <Function2 />
      </LazyLoad>
    </section>
  );
}

export default NAC;
