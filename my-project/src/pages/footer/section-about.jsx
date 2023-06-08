import React from 'react';
import logo from '../../images/new-logo.png';
import qr from '../../images/IMC.png';
import LazyLoad from 'react-lazyload';
import { useTranslation } from 'react-i18next';
function SectionAbout() {
  const { t } = useTranslation();
  return (
    <section className='w-full h-1/2 flex flex-col md:flex-row border-t border-t-boldBlue px-14 py-32 Scale'>
      <div className='md:w-1/2'>
        <div className='flex items-center'>
          <LazyLoad className='h-1/2' offset={0} once>
            <img className='h-16 Scale' src={logo} alt='logoV2' />
          </LazyLoad>
          <h1 className='text-2xl md:text-4xl mx-4 text-blue'>FAGONET</h1>
        </div>
        <div className='md:text-lg'>
          <p className='sm:w-1/2 xl:w-1/3 my-4 py-3 px-4 text-center text-base border border-boldBlue text-blue rounded-2xl'>
            {t('about.contact-more')}
          </p>
          <p className='my-2'>0869 061 186</p>
          <p className='my-2'>v2secure.vn</p>
          <p className='my-2'>{t('about.district')}</p>
        </div>
      </div>
      <div className='w-1/2 m-auto lg:m-0 flex justify-center items-center'>
        <LazyLoad className='w-1/2 md:w-1/4 m-auto' offset={0} once>
          <img className='Scale' src={qr} alt='qr' />
        </LazyLoad>
        <div className='w-1/2 md:text-lg lg:text-xl font-bold md:p-2 m-2'>
          <h3 className='text-blue'>{t('about.qr')}</h3>
          <h3>{t('about.details')}</h3>
        </div>
      </div>
    </section>
  );
}

export default SectionAbout;
