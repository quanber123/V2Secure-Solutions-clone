import React from 'react';
import serviceImg from '../../../../images/secure.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LazyLoad from 'react-lazyload';
function OurServices() {
  const { t } = useTranslation();
  const [hoverServices, setHoverServices] = useState(null);
  const services = [
    {
      service: t('services.test'),
    },
    {
      service: t('services.security'),
    },
    {
      service: t('services.assessment'),
    },
    {
      service: t('services.simulation'),
    },
  ];
  const handleClick = () => {
    window.scroll(0, 0);
  };
  return (
    <section className='container m-auto h-4/5 text-center md:pb-32 lg:pb-64 Up'>
      <h1 className='text-2xl md:text-4xl xl:text-6xl font-bold my-12'>
        {t('our-services1')}{' '}
        <span className='text-blue'>{t('our-services2')}</span>
      </h1>
      <div className='flex flex-col md:flex-row justify-center items-center'>
        {services.map((service, index) => {
          return (
            <article
              key={index}
              className={`services p-8 rounded-xl ${
                hoverServices === index ? 'hoverServices' : ''
              }`}
              onMouseOver={() => setHoverServices(index)}
              onMouseOut={() => setHoverServices(null)}
            >
              <LazyLoad offset={0} once>
                <img
                  className='w-1/3 m-auto Up'
                  src={serviceImg}
                  alt='secureImg'
                />
              </LazyLoad>
              <h3 className='text-xl font-bold my-8'>{service.service}</h3>
              <Link
                className='flex justify-center items-center text-yellow'
                to='/services'
                onClick={handleClick}
              >
                <h4>{t('services.read-more')}</h4>
                <i className='fa fa-long-arrow-up rotate-45 mx-2'></i>
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default OurServices;
