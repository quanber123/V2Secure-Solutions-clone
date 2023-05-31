import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
function NavSolutions() {
  const [selectedLink, setSelectedLink] = useState('V2-SIEM');
  const [showNav, setShowNav] = useState(false);
  const handleLinkClick = useCallback(
    (link) => {
      setSelectedLink(link);
      setShowNav(false);
    },
    [selectedLink]
  );
  return (
    <section>
      <nav
        className={`nav-solutions container lg:w-1/2 mx-auto my-8 lg:text-lg text-2xl font-bold justify-between items-center ${
          showNav ? 'show-nav-solutions' : 'hidden lg:flex'
        }`}
      >
        <button
          className='btn-close-nav font-extrabold text-xl'
          onClick={() => setShowNav(false)}
        >
          X
        </button>
        <NavLink
          className={`mx-5 my-4 lg:my-2 nav-link`}
          rel='nofollow'
          to='siem'
          onClick={() => handleLinkClick('V2-SIEM')}
        >
          V2-SIEM
        </NavLink>
        <NavLink
          className={`mx-5 my-4 lg:my-2 nav-link `}
          rel='nofollow'
          to='waf'
          onClick={() => handleLinkClick('V2-WAF')}
        >
          V2-WAF
        </NavLink>
        <NavLink
          className={`mx-5 my-4 lg:my-2 nav-link`}
          rel='nofollow'
          to='nips'
          onClick={() => handleLinkClick('V2-NIPS')}
        >
          V2-NIPS
        </NavLink>
        <NavLink
          className={`mx-5 my-4 lg:my-2 nav-link`}
          rel='nofollow'
          to='edr'
          onClick={() => handleLinkClick('V2-EDR')}
        >
          V2-EDR
        </NavLink>
        <NavLink
          className={`mx-5 my-4 lg:my-2 nav-link`}
          rel='nofollow'
          to='nac'
          onClick={() => handleLinkClick('V2-NAC')}
        >
          V2-NAC
        </NavLink>
      </nav>
      <button
        className='btn-nav-solutions mx-auto my-14 w-1/4 flex justify-center items-center text-xl lg:hidden'
        onClick={() => setShowNav((prevShow) => !prevShow)}
      >
        {selectedLink}
      </button>
    </section>
  );
}

export default NavSolutions;
