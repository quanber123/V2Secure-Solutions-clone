import React from 'react';
import LazyLoad from 'react-lazyload';
import serviceImg from '../../../images/secure.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
function Main() {
  const [hoverServices, setHoverServices] = useState(null);
  const services = [
    {
      service: 'Penetration Testing',
    },
    {
      service: 'Application Security',
    },
    {
      service: 'Security Assessment',
    },
    {
      service: 'Adversary Simulation',
    },
  ];
  const handleClick = () => {
    window.scroll(0, 0);
  };
  return (
    <main id='our-services' className='bg-black p-12'>
      <section className='container m-auto h-4/5 text-center'>
        <h1 className='text-6xl font-bold my-12'>
          Our <span className='text-blue'>Services</span>
        </h1>
        <div className='flex justify-center items-center'>
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
                <LazyLoad offset={100} once>
                  <img
                    className='w-1/3 m-auto'
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
                  <h4>Read More</h4>
                  <i className='fa fa-long-arrow-up rotate-45 mx-2'></i>
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default Main;
