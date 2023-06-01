import React from 'react';
import logo from '../../images/ecosystem/download.png';
import qr from '../../images/contact/scan-icon.9a8b224f402749907bca.png';
import LazyLoad from 'react-lazyload';
import { useTranslation } from 'react-i18next';
function SectionAbout() {
  const { t } = useTranslation();
  return (
    <section
      className='w-full h-1/2 flex flex-col md:flex-row border-t border-t-boldBlue px-14 py-32 Scale'
      style={{
        background:
          'linear-gradient(150deg,rgba(176, 176, 176, 0.2),rgba(103, 102, 102, 0.2))',
      }}
    >
      <div className='md:w-1/2'>
        <div className='flex items-center'>
          <LazyLoad className='h-1/2' offset={0} once>
            <img className='h-10 Scale' src={logo} alt='logoV2' />
          </LazyLoad>
          <h1 className='text-2xl md:text-4xl mx-4'>V2Secure</h1>
        </div>
        <div className='md:text-lg'>
          <p className='sm:w-1/2 lg:w-1/3 my-4 py-3 px-4 text-center text-base border border-boldBlue text-blue rounded-2xl'>
            {t('about.contact-more')}
          </p>
          <p className='my-2'>0869 061 186</p>
          <p className='my-2'>v2secure.vn</p>
          <p className='my-2'>{t('about.district')}</p>
        </div>
      </div>
      <div className='w-1/2 m-auto lg:m-0 flex justify-center items-center'>
        <LazyLoad className='lg:h-full' offset={0} once>
          <img className='Scale' src={qr} alt='qr' />
        </LazyLoad>
        <div className='md:text-lg lg:text-xl font-bold md:p-2 m-2'>
          <h3 className='text-blue'>{t('about.qr')}</h3>
          <h3>{t('about.details')}</h3>
        </div>
      </div>
    </section>
  );
}

export default SectionAbout;
