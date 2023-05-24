import React, { useCallback, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import i18n from '../../i18n';
import { useTranslation } from 'react-i18next';
import LazyLoad from 'react-lazyload';
import flagVn from '../../flags/vn.png';
import flagUs from '../../flags/us.png';
import logo from '../../images/ecosystem/download.png';
import logo2 from '../../images/logo.0f88255eeb4cbd4b96da.png';
function SectionNav() {
  const { t } = useTranslation();
  const lazyLoadOptions = {
    offset: 100,
    once: true,
  };
  const [isSticky, setIsSticky] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [stateLink, setLinkState] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [tabLanguage, setTabLanguage] = useState(false);

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
  const handleSelectChangeLanguage = useCallback(
    (language) => {
      const lang = language === 'en' ? 'en' : 'vi';
      setSelectedLanguage(lang);
      setShowNav(false);
    },
    [selectedLanguage]
  );
  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage]);
  const handleShowNav = () => {
    setShowNav((prevShow) => !prevShow);
    setTabLanguage(false);
  };
  const handleShowTabLanguage = () => {
    setTabLanguage((prevTab) => !prevTab);
  };
  return (
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
            className={`mx-5 my-2 nav-link ${
              stateLink === 'siem' ? 'link-active' : ''
            } ${isSticky ? 'sticky' : ''}`}
            to='#'
            onClick={() => handleLinkClick('siem')}
          >
            V2-SIEM
          </NavLink>
          <NavLink
            className={`mx-5 my-2 nav-link ${
              stateLink === 'waf' ? 'link-active' : ''
            } ${isSticky ? 'sticky' : ''}`}
            to='#'
            onClick={() => handleLinkClick('waf')}
          >
            V2-WAF
          </NavLink>
          <NavLink
            className={`mx-5 my-2 nav-link ${
              stateLink === 'nips' ? 'link-active' : ''
            } ${isSticky ? 'sticky' : ''}`}
            to='#'
            onClick={() => handleLinkClick('nips')}
          >
            V2-NIPS
          </NavLink>
          <NavLink
            className={`mx-5 my-2 nav-link ${
              stateLink === 'edr' ? 'link-active' : ''
            } ${isSticky ? 'sticky' : ''}`}
            to='#'
            onClick={() => handleLinkClick('edr')}
          >
            V2-EDR
          </NavLink>
          <NavLink
            className={`mx-5 my-2 nav-link ${
              stateLink === 'nac' ? 'link-active' : ''
            } ${isSticky ? 'sticky' : ''}`}
            to='#'
            onClick={() => handleLinkClick('nac')}
          >
            V2-NAC
          </NavLink>
          <NavLink
            className={`mx-5 my-2 nav-link ${
              stateLink === 'contact' ? 'link-active' : ''
            } ${isSticky ? 'sticky' : ''}`}
            to='#'
            onClick={() => handleLinkClick('contact')}
          >
            CONTACT
          </NavLink>
          <div
            className='custom-select-language'
            onClick={handleShowTabLanguage}
          >
            <LazyLoad
              className='mx-5 my-2 h-full cursor-pointer'
              {...lazyLoadOptions}
            >
              <img
                className='w-12 h-8 rounded'
                src={`${selectedLanguage === 'en' ? flagUs : flagVn}`}
                alt={`${selectedLanguage === '' ? 'flagVn' : 'flagUs'}`}
              />
            </LazyLoad>
            {tabLanguage && (
              <ul className='w-52 options-language border border-gray bg-white text-darkBlue shadow-sm shadow-gray px-6 py-2'>
                <li
                  className='flex items-center py-2 border-b border-darkBlue cursor-pointer'
                  onClick={() => handleSelectChangeLanguage('en')}
                >
                  <h3 className='w-2/3'>{t('en')}</h3>
                  <LazyLoad className='w-1/3' {...lazyLoadOptions}>
                    <img
                      className='w-12 h-8 rounded ml-auto'
                      src={flagUs}
                      alt='flagUs'
                    />
                  </LazyLoad>
                </li>
                <li
                  className='flex  items-center py-2 cursor-pointer'
                  onClick={() => handleSelectChangeLanguage('vn')}
                >
                  <h3 className='w-2/3'>{t('vi')}</h3>
                  <LazyLoad className='w-1/3' {...lazyLoadOptions}>
                    <img
                      className='w-12 h-8 rounded ml-auto'
                      src={flagVn}
                      alt='flagVn'
                    />
                  </LazyLoad>
                </li>
              </ul>
            )}
          </div>
        </div>
        <i
          className='fa fa-bars mx-12 lg:hidden flex justify-center items-center text-xl cursor-pointer'
          onClick={handleShowNav}
        ></i>
      </section>
    </nav>
  );
}

export default SectionNav;
