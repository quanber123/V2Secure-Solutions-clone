import React, { useCallback, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import i18n from '../i18n';
import { useTranslation } from 'react-i18next';
import LazyLoad from 'react-lazyload';
import flagVn from '../flags/vn.png';
import flagUs from '../flags/us.png';
import logo from '../images/new-logo.png';
function Nav() {
  const { t } = useTranslation();
  const lazyLoadOptions = {
    offset: 0,
    once: true,
  };
  const [selectedLink, setSelectedLink] = useState('HOME');
  const [showNav, setShowNav] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem('language') || 'en'
  );
  const [tabLanguage, setTabLanguage] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowNav(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
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
    localStorage.setItem('language', selectedLanguage);
  }, [selectedLanguage]);
  const handleShowNav = () => {
    setShowNav((prevShow) => !prevShow);
    setTabLanguage(false);
  };
  const handleLinkClick = useCallback(
    (link) => {
      setSelectedLink(link);
      setShowNav(false);
    },
    [selectedLink]
  );
  const handleShowTabLanguage = () => {
    setTabLanguage((prevTab) => !prevTab);
  };
  return (
    <nav className={`relative nav-item h-24 flex Scale`}>
      <section className='h-full flex justify-between container m-auto'>
        <Link
          className='mx-8 lg:mx-0 flex justify-between items-center cursor-pointer'
          to='.'
          onClick={() => setShowNav(false)}
        >
          <LazyLoad className='w-1/2 py-2' {...lazyLoadOptions}>
            <img className='w-20 h-20' src={logo} alt='logo' />
          </LazyLoad>
          <h1 className='w-1/2 mx-4 text-lg md:text-xl lg:text-2xl xl:text-4xl font-bold text-blue'>
            FAGONET
          </h1>
        </Link>
        <div
          className={`flex flex-col lg:flex-row font-bold lg:text-lg justify-between lg:items-center ${
            showNav ? 'show-nav' : 'hidden lg:flex'
          }`}
        >
          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'mx-5 my-4 lg:my-2 nav-link hight-light'
                : 'mx-5 my-4 lg:my-2 nav-link'
            }
            rel='nofollow'
            to='/'
            onClick={() => handleLinkClick('HOME')}
          >
            HOME
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'mx-5 my-4 lg:my-2 nav-link hight-light'
                : 'mx-5 my-4 lg:my-2 nav-link'
            }
            rel='nofollow'
            to='solutions'
            onClick={() => handleLinkClick('SOLUTIONS')}
          >
            {t('SOLUTIONS')}
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'mx-5 my-4 lg:my-2 nav-link hight-light'
                : 'mx-5 my-4 lg:my-2 nav-link'
            }
            rel='nofollow'
            to='services'
            onClick={() => handleLinkClick('SERVICES')}
          >
            {t('SERVICES')}
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'mx-5 my-4 lg:my-2 nav-link hight-light'
                : 'mx-5 my-4 lg:my-2 nav-link'
            }
            rel='nofollow'
            to='contact'
            onClick={() => handleLinkClick('CONTACT')}
          >
            {t('CONTACT')}
          </NavLink>
          <div
            className='custom-select-language'
            onClick={handleShowTabLanguage}
          >
            <LazyLoad
              className='mx-5 my-4 lg:my-2 h-full cursor-pointer'
              {...lazyLoadOptions}
            >
              <img
                className='w-12 h-8 rounded'
                src={`${selectedLanguage === 'en' ? flagUs : flagVn}`}
                alt={`${selectedLanguage === '' ? 'flagVn' : 'flagUs'}`}
              />
            </LazyLoad>
            {tabLanguage && (
              <ul className='w-52 options-language px-6 py-2'>
                <li
                  className='flex items-center py-2 border-b border-gray cursor-pointer'
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
                  className='flex items-center py-2 cursor-pointer'
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

export default Nav;
