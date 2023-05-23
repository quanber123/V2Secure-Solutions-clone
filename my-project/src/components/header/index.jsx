import React, { useCallback, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
import LazyLoad from 'react-lazyload';
import logo from '../../images/ecosystem/download.png';
import logo2 from '../../images/logo.0f88255eeb4cbd4b96da.png';
import siem from '../../images/ecosystem/siem.png';
import waf from '../../images/ecosystem/waf.png';
import nips from '../../images/ecosystem/nips.png';
import edr from '../../images/ecosystem/edr.png';
import nac from '../../images/ecosystem/nac.png';

function Header() {
  const { t } = useTranslation();
  const lazyLoadOptions = {
    offset: 100,
    once: true,
  };
  const [isSticky, setIsSticky] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [stateLink, setLinkState] = useState('');
  const [currentLanguage, setCurrentLanguage] = useState('vi');

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

  const handleLinkClick = useCallback((id) => {
    setLinkState(id);
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
    setShowNav(false);
  }, []);

  const handleScroll = useCallback(() => {
    if (window.pageYOffset > 200) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const handleChangeLanguage = useCallback(() => {
    const lang = currentLanguage === 'en' ? 'vi' : 'en';
    setCurrentLanguage(lang);
    setShowNav(false);
  }, [currentLanguage]);

  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, [currentLanguage]);

  return (
    <header className='h-screen'>
      <nav
        className={`relative nav-item ${
          isSticky ? 'sticky' : ''
        } h-16 flex Sticky`}
      >
        <section className='h-full flex justify-between container m-auto'>
          <LazyLoad
            className='md:w-1/12 py-2 cursor-pointer'
            {...lazyLoadOptions}
          >
            <img
              className='h-full mx-5 lg:mx-0'
              src={isSticky ? logo2 : logo}
              alt='logo'
            />
          </LazyLoad>
          <div
            className={`flex flex-col lg:flex-row font-bold lg:text-lg justify-between lg:items-center ${
              showNav ? 'show' : 'hidden lg:flex'
            }`}
          >
            <NavLink
              className={`px-5 py-2 nav-link ${
                stateLink === 'siem' ? 'link-active' : ''
              } ${isSticky ? 'sticky' : ''}`}
              to='#'
              onClick={() => handleLinkClick('siem')}
            >
              V2-SIEM
            </NavLink>
            <NavLink
              className={`px-5 py-2 nav-link ${
                stateLink === 'waf' ? 'link-active' : ''
              } ${isSticky ? 'sticky' : ''}`}
              to='#'
              onClick={() => handleLinkClick('waf')}
            >
              V2-WAF
            </NavLink>
            <NavLink
              className={`px-5 py-2 nav-link ${
                stateLink === 'nips' ? 'link-active' : ''
              } ${isSticky ? 'sticky' : ''}`}
              to='#'
              onClick={() => handleLinkClick('nips')}
            >
              V2-NIPS
            </NavLink>
            <NavLink
              className={`px-5 py-2 nav-link ${
                stateLink === 'edr' ? 'link-active' : ''
              } ${isSticky ? 'sticky' : ''}`}
              to='#'
              onClick={() => handleLinkClick('edr')}
            >
              V2-EDR
            </NavLink>
            <NavLink
              className={`px-5 py-2 nav-link ${
                stateLink === 'nac' ? 'link-active' : ''
              } ${isSticky ? 'sticky' : ''}`}
              to='#'
              onClick={() => handleLinkClick('nac')}
            >
              V2-NAC
            </NavLink>
            <NavLink
              className={`px-5 py-2 nav-link ${
                stateLink === 'contact' ? 'link-active' : ''
              } ${isSticky ? 'sticky' : ''}`}
              to='#'
              onClick={() => handleLinkClick('contact')}
            >
              CONTACT
            </NavLink>
            <NavLink
              className={`px-5 nav-link ${isSticky ? 'sticky' : ''} uppercase`}
              onClick={handleChangeLanguage}
            >
              {`${currentLanguage === 'en' ? 'LANGUAGE' : 'NGÔN NGỮ'}`}
              <span className='mx-1'>:</span>
              {currentLanguage}
            </NavLink>
          </div>
          <i
            className='fa fa-bars mx-12 lg:hidden flex justify-center items-center text-xl cursor-pointer'
            onClick={() => setShowNav((prevShow) => !prevShow)}
          ></i>
        </section>
      </nav>
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
