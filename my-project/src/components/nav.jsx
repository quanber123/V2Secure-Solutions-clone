import { useCallback, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import i18n from '../i18n';
import { useTranslation } from 'react-i18next';
import LazyLoad from 'react-lazyload';
import earthImg from '../assets/images/nav/earth.png';
import logo from '../assets/images/home/logo.png';
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
      handleShowTabLanguage(false);
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
          <LazyLoad className='w-1/4' {...lazyLoadOptions}>
            <img className='my-auto mr-2' src={logo} alt='logo' />
          </LazyLoad>
          <h3 className='text-[26px] font-bold text-blue'>FAGONET</h3>
        </Link>
        <div
          className={`flex flex-col lg:flex-row font-bold justify-between lg:items-center ${
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
          <div className='custom-select-language ml-4'>
            <img className='w-[21px]' src={earthImg} alt='earth-logo' />
            <h4 className='ml-2'>{selectedLanguage === 'vi' ? 'VI' : 'EN'}</h4>
            <button onClick={handleShowTabLanguage}>
              <i className='fa fa-caret-down ml-2 mb-[4px]'></i>
            </button>
            {tabLanguage && (
              <ul className='options-language'>
                <li
                  className='relative flex justify-between items-center cursor-pointer'
                  onClick={() => handleSelectChangeLanguage('en')}
                >
                  <h5 className='w-1/4 mx-[12px]'>EN</h5>
                  <h5 className='w-3/4 px-4 border-l border-l-white'>
                    {t('en')}
                  </h5>
                  <i
                    className={`fa fa-check absolute right-2 ${
                      selectedLanguage === 'en' ? 'block' : 'hidden'
                    }`}
                  ></i>
                </li>
                <li
                  className='relative flex justify-between items-center cursor-pointer'
                  onClick={() => handleSelectChangeLanguage('vn')}
                >
                  <h5 className='w-1/4 mx-[12px]'>VI</h5>
                  <h5 className='w-3/4 px-4 border-l border-l-white'>
                    {t('vi')}
                  </h5>
                  <i
                    className={`fa fa-check absolute right-2 ${
                      selectedLanguage === 'vi' ? 'block' : 'hidden'
                    }`}
                  ></i>
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
