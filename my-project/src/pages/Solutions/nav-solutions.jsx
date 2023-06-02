import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
function NavSolutions() {
  const [selectedLink, setSelectedLink] = useState('FAGONET-SIEM');
  const [showNav, setShowNav] = useState(false);
  const handleLinkClick = useCallback(
    (link) => {
      setSelectedLink(link);
      setShowNav(false);
    },
    [selectedLink]
  );
  return (
    <section className='Scale'>
      <nav
        className={`nav-solutions container xl:w-1/2 mx-auto my-8 lg:text-lg text-2xl font-bold justify-between items-center Right ${
          showNav ? 'show-nav-solutions' : 'hidden lg:flex'
        }`}
      >
        <button
          className='btn-close-nav font-extrabold lg:hidden text-xl'
          onClick={() => setShowNav(false)}
        >
          X
        </button>
        <NavLink
          className={
            selectedLink === 'FAGONET-SIEM'
              ? 'mx-5 my-4 lg:my-2 nav-link hight-light'
              : 'mx-5 my-4 lg:my-2 nav-link '
          }
          rel='nofollow'
          to='siem'
          onClick={() => handleLinkClick('FAGONET-SIEM')}
        >
          FAGONET-SIEM
        </NavLink>
        <NavLink
          className={
            selectedLink === 'FAGONET-WAF'
              ? 'mx-5 my-4 lg:my-2 nav-link hight-light'
              : 'mx-5 my-4 lg:my-2 nav-link '
          }
          rel='nofollow'
          to='waf'
          onClick={() => handleLinkClick('FAGONET-WAF')}
        >
          FAGONET-WAF
        </NavLink>
        <NavLink
          className={
            selectedLink === 'FAGONET-NIPS'
              ? 'mx-5 my-4 lg:my-2 nav-link hight-light'
              : 'mx-5 my-4 lg:my-2 nav-link '
          }
          rel='nofollow'
          to='nips'
          onClick={() => handleLinkClick('FAGONET-NIPS')}
        >
          FAGONET-NIPS
        </NavLink>
        <NavLink
          className={
            selectedLink === 'FAGONET-EDR'
              ? 'mx-5 my-4 lg:my-2 nav-link hight-light'
              : 'mx-5 my-4 lg:my-2 nav-link '
          }
          rel='nofollow'
          to='edr'
          onClick={() => handleLinkClick('FAGONET-EDR')}
        >
          FAGONET-EDR
        </NavLink>
        <NavLink
          className={
            selectedLink === 'FAGONET-NAC'
              ? 'mx-5 my-4 lg:my-2 nav-link hight-light'
              : 'mx-5 my-4 lg:my-2 nav-link '
          }
          rel='nofollow'
          to='nac'
          onClick={() => handleLinkClick('FAGONET-NAC')}
        >
          FAGONET-NAC
        </NavLink>
      </nav>
      <button
        className='btn-nav-solutions mx-auto my-14 w-1/3 flex justify-center items-center text-xl lg:hidden'
        onClick={() => setShowNav((prevShow) => !prevShow)}
      >
        {selectedLink}
      </button>
    </section>
  );
}

export default NavSolutions;
