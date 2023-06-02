import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import LazyLoad from 'react-lazyload';
import siem from '../../../images/ecosystem/siem.png';
import waf from '../../../images/ecosystem/waf.png';
import nips from '../../../images/ecosystem/nips.png';
import edr from '../../../images/ecosystem/edr.png';
import nac from '../../../images/ecosystem/nac.png';
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
  const handleScroll = () => {
    const element = document.getElementById('our-services');
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }
  };
  return (
    <header>
      <div className='h-2/3 flex flex-col items-center justify-around my-14 md:my-44'>
        <div className='m-auto flex flex-col justify-center items-center text-center Scale'>
          <h1 className='text-2xl md:text-4xl xl:text-6xl'>
            {t('ecosystem.title1')}
          </h1>
          <h3 className='text-2xl md:text-4xl xl:text-6xl my-8 lg:my-14'>
            {t('ecosystem.title3')}
          </h3>
          <button
            className='px-4 py-1 md:px-12 md:py-3 rounded-2xl text-lg font-bold border-2 border-darkBlue bg-boldBlue hover:bg-darkGreen hover:text-blue'
            style={{
              backgroundImage: `url(
                'https://cyberciti.1onestrong.com/wp-content/uploads/2023/05/asset-06.png'
              )`,
            }}
            onClick={handleScroll}
          >
            {t('started')}
          </button>
        </div>
      </div>
      <div className='w-3/4 h-1/3 mx-auto mt-12 mb-4 hidden sm:flex flex-wrap justify-between items-center Up'>
        {ecosystems.map((ecosystem, index) => (
          <article
            key={index}
            className='flex flex-col justify-between items-between gallery-title-header text-gray hover:text-white opacity-80 hover:opacity-100'
          >
            <LazyLoad
              className='m-auto gallery-img-header'
              key={index}
              {...lazyLoadOptions}
            >
              <img
                className='h-full Up'
                src={ecosystem.url}
                alt={ecosystem.content}
              />
            </LazyLoad>
            <h3 className='h-20 text-center'>{ecosystem.content}</h3>
          </article>
        ))}
      </div>
    </header>
  );
}

export default Header;
