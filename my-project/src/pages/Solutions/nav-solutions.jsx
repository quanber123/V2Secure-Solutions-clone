import React from 'react';
import { NavLink } from 'react-router-dom';
function NavSolutions() {
  return (
    <nav className='text-lg font-bold'>
      <NavLink className={`mx-5 my-2 nav-link`} rel='nofollow' to='siem'>
        V2-SIEM
      </NavLink>
      <NavLink className={`mx-5 my-2 nav-link `} rel='nofollow' to='waf'>
        V2-WAF
      </NavLink>
      <NavLink className={`mx-5 my-2 nav-link`} rel='nofollow' to='nips'>
        V2-NIPS
      </NavLink>
      <NavLink className={`mx-5 my-2 nav-link`} rel='nofollow' to='edr'>
        V2-EDR
      </NavLink>
      <NavLink className={`mx-5 my-2 nav-link`} rel='nofollow' to='nac'>
        V2-NAC
      </NavLink>
    </nav>
  );
}

export default NavSolutions;
