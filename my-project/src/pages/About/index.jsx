import React from 'react';
import LazyLoad from 'react-lazyload';
import phone from '../../images/contact/download.png';
import web from '../../images/contact/download (1).png';
import location from '../../images/contact/download (2).png';
import qr from '../../images/contact/scan-icon.9a8b224f402749907bca.png';
import { useTranslation } from 'react-i18next';
function About() {
  const { t } = useTranslation();
  const lazyLoadOptions = {
    offset: 0,
    once: true,
  };
  return (
    <section
      id='contact'
      className='container m-auto bg-white text-darkBlue rounded-2xl my-12 Up'
    >
      <LazyLoad {...lazyLoadOptions}>
        <h1 className='underline text-center text-xl md:text-2xl font-bold pt-8 px-4 Up'>
          {t('about.title')}
        </h1>
      </LazyLoad>
      <LazyLoad {...lazyLoadOptions}>
        <div className='p-8 text-center text-xl md:text-2xl font-semibold Up'>
          <h3 className='my-2'>{t('about.title1')}</h3>
          <h3 className='my-2'>{t('about.title2')}</h3>
        </div>
      </LazyLoad>
      <LazyLoad {...lazyLoadOptions}>
        <div className='p-8 bg-blue text-white rounded-b-2xl Up'>
          <h3 className='font-bold text-lg md:text-xl px-8'>
            {t('about.contact')}
          </h3>
          <div className='flex'>
            <div className='w-2/3 px-8 py-4 text-base md:text-lg'>
              <div className='flex items-center py-2'>
                <LazyLoad className='h-8 mr-4' {...lazyLoadOptions}>
                  <img className='w-full h-full' src={phone} alt={phone} />
                </LazyLoad>
                <p>0869 061 186</p>
              </div>
              <div className='flex items-center py-2'>
                <LazyLoad className='h-8 mr-4' {...lazyLoadOptions}>
                  <img className='w-full h-full' src={web} alt={web} />
                </LazyLoad>
                <p>v2secure.vn</p>
              </div>
              <div className='flex md:items-center py-2'>
                <LazyLoad className='h-8 mr-4' {...lazyLoadOptions}>
                  <img
                    className='w-full h-full'
                    src={location}
                    alt={location}
                  />
                </LazyLoad>
                <p className='w-5/6'>{t('about.district')}</p>
              </div>
            </div>
            <div className='w-1/3 md:flex md:items-end'>
              <LazyLoad>
                <img src={qr} alt={qr} />
              </LazyLoad>
              <div className='text-lg md:text-xl font-bold md:p-2 m-2'>
                <h3 className='text-yellow'>{t('about.qr')}</h3>
                <h3>{t('about.details')}</h3>
              </div>
            </div>
          </div>
        </div>
      </LazyLoad>
    </section>
  );
}

export default About;
