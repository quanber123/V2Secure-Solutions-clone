import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ServicesContext } from './hooks/services-context';
export default function Services() {
  const { t } = useTranslation();
  const { dataServices } = useContext(ServicesContext);
  const handleClick = () => {
    window.scroll(0, 0);
  };
  return (
    <section className='container m-auto py-8 Up'>
      <h1 className='text-center text-2xl md:text-4xl text-blue font-bold'>
        {t('our-services')}
      </h1>
      {dataServices.map((service, index) => {
        return (
          <article
            className='prev-services my-8 py-8 border-b border-b-gray'
            key={index}
          >
            <img
              className='w-1/2 m-auto md:w-1/3 lg:w-1/4 Scale'
              src={service.imgUrl}
              alt={service.intro}
            />
            <div className='w-full md:w-2/3 lg:w-3/4 my-4 md:my-0 text-center md:text-start'>
              <h2 className='text-lg md:text-2xl text-blue font-bold'>
                {service.intro}
              </h2>
              <p className='font-bold my-6'>{service.firstWord}</p>
              <Link
                className='px-2 py-2 md:px-4 rounded-3xl text-lg font-bold border text-black border-blue bg-boldBlue hover:bg-blue '
                to={`${service.link}`}
                onClick={handleClick}
              >
                {t('view-more')}
              </Link>
            </div>
          </article>
        );
      })}
    </section>
  );
}
