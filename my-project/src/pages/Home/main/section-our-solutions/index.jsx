import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
// import LazyLoad from 'react-lazyload';
// import serviceImg from '../../../../images/secure.png';
import siemLogo from '../../../../images/ecosystem/siem.png';
import wafLogo from '../../../../images/ecosystem/waf.png';
import nipsLogo from '../../../../images/ecosystem/nips.png';
import edrLogo from '../../../../images/ecosystem/edr.png';
import nacLogo from '../../../../images/ecosystem/nac.png';
import LazyLoad from 'react-lazyload';
function OurSolutions() {
  const { t } = useTranslation();
  const [hoverSolutions, setHoverSolutions] = useState(null);
  const dataEcosystem = [
    {
      url: 'siem',
      urlImg: siemLogo,
      content: t('ecosystem.siem'),
    },
    {
      url: 'waf',
      urlImg: wafLogo,
      content: t('ecosystem.waf'),
    },
    {
      url: 'nips',
      urlImg: nipsLogo,
      content: t('ecosystem.nips'),
    },
    {
      url: 'edr',
      urlImg: edrLogo,
      content: t('ecosystem.edr'),
    },
    {
      url: 'nac',
      urlImg: nacLogo,
      content: t('ecosystem.nac'),
    },
    {
      url: 'nids',
      urlImg: nacLogo,
      content: t('ecosystem.nids'),
    },
    {
      url: 'dips',
      urlImg: nacLogo,
      content: t('ecosystem.dips'),
    },
  ];
  const handleClick = () => {
    window.scroll(0, 0);
  };
  return (
    <section className='text-center md:pb-32 Up'>
      <h1 className='text-center text-2xl md:text-4xl xl:text-6xl font-bold my-12'>
        {t('our-solutions1')}{' '}
        <span className='text-blue'>{t('our-solutions2')}</span>
      </h1>
      <div className='flex sm:flex-wrap flex-col sm:flex-row justify-between items-center md:items-stretch'>
        {dataEcosystem.map((solution, index) => {
          return (
            <article
              key={index}
              className={`solutions p-4 xl:p-8 rounded-xl ${
                hoverSolutions === index ? 'hoverSolutions' : ''
              }`}
              onMouseOver={() => setHoverSolutions(index)}
              onMouseOut={() => setHoverSolutions(null)}
            >
              <LazyLoad className='h-1/3' offset={100} once>
                <img
                  className='w-1/2 m-auto md:w-full h-full Up'
                  src={solution.urlImg}
                  alt={solution.url}
                />
              </LazyLoad>
              <h3 className='h-1/3 text-xl font-bold my-8'>
                {solution.content}
              </h3>
              <Link
                className='h-1/3 flex justify-center items-center text-yellow'
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
