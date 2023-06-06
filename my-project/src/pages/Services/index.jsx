import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import NavServices from './nav-services';
import { Link, Outlet } from 'react-router-dom';
import { ServicesContext } from './hooks/services-context';
export default function Services() {
  // const { t } = useTranslation();
  const { data } = useContext(ServicesContext);
  const handleClick = () => {
    window.scroll(0, 0);
  };
  return (
    <section className='container m-auto py-8 Up'>
      <h1 className='text-center text-2xl md:text-4xl text-blue font-bold'>
        Our Services
      </h1>
      {data.map((service, index) => {
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
            <div className='w-full md:w-2/3 lg:w-3/4 px-8 my-4 md:my-0 text-center md:text-start'>
              <h2 className='text-lg md:text-2xl text-blue font-bold'>
                {service.intro}
              </h2>
              <p className='font-bold my-6'>{service.firstWord}</p>
              <Link
                className='px-4 py-1 md:px-12 md:py-3 rounded-2xl text-lg font-bold border-2 border-darkBlue bg-boldBlue hover:bg-darkGreen hover:text-blue'
                to={`${service.link}`}
                onClick={handleClick}
              >
                View more
              </Link>
            </div>
          </article>
        );
      })}
    </section>
  );
}
