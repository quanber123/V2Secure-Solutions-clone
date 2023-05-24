import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import LazyLoad from 'react-lazyload';
import logo from '../../images/ecosystem/download.png';
import siem from '../../images/ecosystem/siem.png';
import waf from '../../images/ecosystem/waf.png';
import nips from '../../images/ecosystem/nips.png';
import edr from '../../images/ecosystem/edr.png';
import nac from '../../images/ecosystem/nac.png';
import SectionNav from './section-nav';
function Header() {
  const { t } = useTranslation();
  const lazyLoadOptions = {
    offset: 100,
    once: true,
  };
  const dataEcosystem = [
    {
      url: siem,
      content: 'ecosystem.siem',
    },
    {
      url: waf,
      content: 'ecosystem.waf',
    },
    {
      url: nips,
      content: 'ecosystem.nips',
    },
    {
      url: edr,
      content: 'ecosystem.edr',
    },
    {
      url: nac,
      content: 'ecosystem.nac',
    },
  ];

  const [ecosystems, setEcosystems] = useState([]);

  useEffect(() => {
    const updatedEcosystems = dataEcosystem.map((item) => ({
      url: item.url,
      content: t(item.content),
    }));
    setEcosystems(updatedEcosystems);
  }, [t]);
  return (
    <header className='h-screen'>
      <SectionNav />
      <section className='md:h-full container mx-auto py-8 flex flex-col justify-start'>
        <div className='h-full sm:h-1/2 flex flex-col justify-between sm:flex-row md:justify-between items-start'>
          <div className='w-full md:w-1/2 h-1/2 m-auto flex flex-col justify-center items-stretch text-center'>
            <h1 className='text-2xl w-4/5 m-auto md:w-full md:text-4xl font-bold Scale'>
              {t('ecosystem.title1')}
            </h1>
            <h2 className='text-xl md:text-3xl font-bold Scale my-4'>
              {t('ecosystem.title2')}
            </h2>
            <h3 className='text-lg md:text-2xl Scale'>
              {t('ecosystem.title3')}
            </h3>
          </div>
          <LazyLoad
            className='w-1/2 mx-auto my-12 md:my-auto md:h-1/2 lg:h-3/4 py-8 flex justify-center items-center Scale'
            {...lazyLoadOptions}
          >
            <img className='h-full' src={logo} alt={logo} />
          </LazyLoad>
        </div>
        <div className='hidden sm:flex flex-wrap justify-between items-center'>
          {ecosystems.map((ecosystem, index) => (
            <article
              key={index}
              className='flex flex-col Scale gallery-title-header'
            >
              <LazyLoad
                className='m-auto gallery-img-header'
                key={index}
                {...lazyLoadOptions}
              >
                <img src={ecosystem.url} alt={ecosystem.content} />
              </LazyLoad>
              <h3 className='h-1/2 text-center'>{ecosystem.content}</h3>
            </article>
          ))}
        </div>
      </section>
    </header>
  );
}

export default Header;
