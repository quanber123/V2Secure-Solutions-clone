import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import serviceImg from '../../../../images/secure.png';
function OurSolutions() {
  const { t } = useTranslation();
  const [hoverSolutions, setHoverSolutions] = useState(null);
  const dataEcosystem = [
    {
      url: 'siem',
      content: t('ecosystem.siem'),
    },
    {
      url: 'waf',
      content: t('ecosystem.waf'),
    },
    {
      url: 'nips',
      content: t('ecosystem.nips'),
    },
    {
      url: 'edr',
      content: t('ecosystem.edr'),
    },
    {
      url: 'nac',
      content: t('ecosystem.nac'),
    },
  ];
  const handleClick = () => {
    window.scroll(0, 0);
  };
  return (
    <section className='container m-auto text-center md:pb-32 lg:pb-64 Up'>
      <h1 className='text-center text-2xl md:text-4xl xl:text-6xl font-bold my-12'>
        {t('our-solutions1')}{' '}
        <span className='text-blue'>{t('our-solutions2')}</span>
      </h1>
      <div className='flex sm:flex-wrap flex-col sm:flex-row justify-center items-stretch'>
        {dataEcosystem.map((solution, index) => {
          return (
            <article
              key={index}
              className={`solutions p-4 sm:p-8 rounded-xl ${
                hoverSolutions === index ? 'hoverSolutions' : ''
              }`}
              onMouseOver={() => setHoverSolutions(index)}
              onMouseOut={() => setHoverSolutions(null)}
            >
              <LazyLoad offset={100} once>
                <img
                  className='w-1/3 m-auto Up'
                  src={serviceImg}
                  alt='secureImg'
                />
              </LazyLoad>
              <h3 className='text-xl font-bold my-8'>{solution.content}</h3>
              <Link
                className='flex justify-center items-center text-yellow'
                to={{
                  pathname: `/solutions/${solution.url}`,
                }}
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

export default OurSolutions;
