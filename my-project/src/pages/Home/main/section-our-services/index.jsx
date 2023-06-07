import React, { useContext } from 'react';
import serviceImg from '../../../../images/secure.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LazyLoad from 'react-lazyload';
import { ServicesContext } from '../../../Services/hooks/services-context';
function OurServices() {
  const { t } = useTranslation();
  const [hoverServices, setHoverServices] = useState(null);
  const { dataServices } = useContext(ServicesContext);
  const handleClick = () => {
    window.scroll(0, 0);
  };
  return (
    <section className='container m-auto h-4/5 text-center pb-32 Up'>
      <h1 className='text-2xl md:text-4xl xl:text-6xl font-bold my-12'>
        {t('our-services1')}{' '}
        <span className='text-blue'>{t('our-services2')}</span>
      </h1>
      <div className='flex sm:flex-wrap flex-col sm:flex-row justify-center items-stretch'>
        {dataServices.map((service, index) => {
          return (
            <article
              key={index}
              className={`services p-4 sm:p-8 rounded-xl ${
                hoverServices === index ? 'hoverServices' : ''
              }`}
              onMouseOver={() => setHoverServices(index)}
              onMouseOut={() => setHoverServices(null)}
            >
              <LazyLoad offset={100} once>
                <img
                  className='w-1/3 m-auto Up'
                  src={serviceImg}
                  alt='secureImg'
                />
              </LazyLoad>
              <h3 className='text-xl font-bold my-8'>{service.intro}</h3>
              <Link
                className='flex justify-center items-center text-yellow'
                to={`/services/${service.link}`}
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
