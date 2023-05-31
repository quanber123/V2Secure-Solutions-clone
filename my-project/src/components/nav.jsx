import React, { useCallback, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import i18n from '../i18n';
import { useTranslation } from 'react-i18next';
import LazyLoad from 'react-lazyload';
import flagVn from '../flags/vn.png';
import flagUs from '../flags/us.png';
import logo from '../images/ecosystem/download.png';
import logo2 from '../images/logo.0f88255eeb4cbd4b96da.png';
function Nav() {
  const { t } = useTranslation();
  const lazyLoadOptions = {
    offset: 100,
    once: true,
  };
  const [isSticky, setIsSticky] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [tabLanguage, setTabLanguage] = useState(false);

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
      } h-24 flex Sticky`}
    >
      <section className='h-full flex justify-between container m-auto'>
        <div className='md:w-1/6 h-full flex items-center'>
          <LazyLoad className='py-2 cursor-pointer' {...lazyLoadOptions}>
            <Link to='/'>
              <img
                className='w-full '
                src={isSticky ? logo2 : logo}
                alt='logo'
              />
            </Link>
          </LazyLoad>
          <h1 className='mx-4 text-4xl font-bold'>V2Secure</h1>
        </div>
        <div
          className={`flex flex-col lg:flex-row font-bold lg:text-lg justify-between lg:items-center ${
            showNav ? 'show' : 'hidden lg:flex'
          }`}
        >
          <NavLink
            className={`mx-5 my-2 nav-link ${isSticky ? 'sticky' : ''}`}
            rel='nofollow'
            to='/'
          >
            HOME
          </NavLink>
          <NavLink
            className={`mx-5 my-2 nav-link  ${isSticky ? 'sticky' : ''}`}
            rel='nofollow'
            to='solutions'
          >
            {t('SOLUTIONS')}
          </NavLink>
          <NavLink
            className={`mx-5 my-2 nav-link  ${isSticky ? 'sticky' : ''}`}
            rel='nofollow'
            to='services'
          >
            {t('SERVICES')}
          </NavLink>
          <NavLink
            className={`mx-5 my-2 nav-link  ${isSticky ? 'sticky' : ''}`}
            rel='nofollow'
            to='contact'
          >
            {t('CONTACT')}
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
              <ul className='w-52 options-language  px-6 py-2'>
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
