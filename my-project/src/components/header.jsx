import React, { useCallback, useEffect, useState } from 'react';
import LazyLoad from 'react-lazyload';
import { NavLink } from 'react-router-dom';
import logo from '../images/ecosystem/download.png';
import logo2 from '../images/logo.0f88255eeb4cbd4b96da.png';
import siem from '../images/ecosystem/siem.png';
import waf from '../images/ecosystem/waf.png';
import nips from '../images/ecosystem/nips.png';
import edr from '../images/ecosystem/edr.png';
import nac from '../images/ecosystem/nac.png';
function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [stateLink, setLinkState] = useState('');
  function isShow() {
    setShowNav((prevShow) => !prevShow);
  }
  const dataEcosystem = [
    {
      url: siem,
      content: 'Security Information and Event Management V2-SIEM',
    },
    {
      url: waf,
      content: 'Web Application Firewall V2-WAF',
    },
    {
      url: nips,
      content: 'Network Intrusion Prevention System V2-NIPS',
    },
    {
      url: edr,
      content: 'Endpoint Detection and Response V2-EDR',
    },
    {
      url: nac,
      content: 'Network Access Control V2-NAC',
    },
  ];
  const [ecosystems, setEcosystems] = useState([]);
  useEffect(() => {
    setEcosystems(dataEcosystem);
  }, []);
  const handleLinkClick = useCallback((id) => {
    setLinkState(id);
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
    setShowNav(false);
  });
  const handleScroll = () => {
    if (window.pageYOffset > 200) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header className='h-screen'>
      <nav
        className={`relative nav-item ${isSticky ? 'sticky' : ''} h-16 flex`}
      >
        <section className='h-full flex justify-between container m-auto'>
          <LazyLoad
            className='w-full md:w-1/12 p-1 cursor-pointer'
            offset={100}
            once
          >
            <img className='h-full' src={isSticky ? logo2 : logo} alt='logo' />
          </LazyLoad>
          <div
            className={`lg:flex font-bold text-lg lg:justify-between lg:items-center ${
              showNav ? 'show' : 'hidden'
            }`}
          >
            <NavLink
              className={`mx-5 nav-link ${
                stateLink === 'siem' ? 'link-active' : ''
              } ${isSticky ? 'sticky' : ''}`}
              to='#'
              onClick={() => handleLinkClick('siem')}
            >
              V2-SIEM
            </NavLink>
            <NavLink
              className={`mx-5 nav-link ${
                stateLink === 'waf' ? 'link-active' : ''
              } ${isSticky ? 'sticky' : ''}`}
              to='#'
              onClick={() => handleLinkClick('waf')}
            >
              V2-WAF
            </NavLink>
            <NavLink
              className={`mx-5 nav-link ${
                stateLink === 'nips' ? 'link-active' : ''
              } ${isSticky ? 'sticky' : ''}`}
              to='#'
              onClick={() => handleLinkClick('nips')}
            >
              V2-NIPS
            </NavLink>
            <NavLink
              className={`mx-5 nav-link ${
                stateLink === 'edr' ? 'link-active' : ''
              } ${isSticky ? 'sticky' : ''}`}
              to='#'
              onClick={() => handleLinkClick('edr')}
            >
              V2-EDR
            </NavLink>
            <NavLink
              className={`mx-5 nav-link ${
                stateLink === 'nac' ? 'link-active' : ''
              } ${isSticky ? 'sticky' : ''}`}
              to='#'
              onClick={() => handleLinkClick('nac')}
            >
              V2-NAC
            </NavLink>
            <NavLink
              className={`mx-5 nav-link ${
                stateLink === 'contact' ? 'link-active' : ''
              } ${isSticky ? 'sticky' : ''}`}
              to='#'
              onClick={() => handleLinkClick('contact')}
            >
              CONTACT
            </NavLink>
            <button className='mx-5 nav-link'>LANGUAGE</button>
          </div>
          <i
            className='fa fa-bars mx-5 lg:hidden flex justify-center items-center text-xl cursor-pointer'
            onClick={isShow}
          ></i>
        </section>
      </nav>
      <section className='md:h-full container m-auto py-8 flex flex-col justify-start'>
        <div className='h-full sm:h-1/2 flex flex-col sm:flex-row md:justify-between items-start'>
          <div className='w-full md:w-1/2 text-center'>
            <h1 className='text-4xl font-bold my-4'>Cybersecurity Ecosystem</h1>
            <h2 className='text-2xl font-bold my-4'>V2SECURE Solutions</h2>
            <h3 className='text-xl my-4'>V2SECURE Solutions</h3>
          </div>
          <LazyLoad
            className='w-full h-1/4 md:w-1/2 md:h-3/4 py-8 flex justify-center items-center'
            offset={100}
            once
          >
            <img className='h-full' src={logo} alt={logo} />
          </LazyLoad>
        </div>
        <div className='hidden sm:flex items-center'>
          {ecosystems.map((ecosystem, index) => (
            <article key={index} className='h-1/2 w-1/2 flex flex-col'>
              <LazyLoad className='m-auto h-3/4' key={index} offset={100} once>
                <img
                  className=' h-full'
                  src={ecosystem.url}
                  alt={ecosystem.content}
                />
              </LazyLoad>
              <h3 className='text-center p-4'>{ecosystem.content}</h3>
            </article>
          ))}
        </div>
      </section>
    </header>
  );
}

export default Header;
