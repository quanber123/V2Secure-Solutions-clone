import React from 'react';
import LazyLoad from 'react-lazyload';
import Security from './WAF/security';
import Description from './WAF/description';
import Plan from './WAF/plan';
import Processing from './WAF/processing';
import PreventAttacks from './WAF/prevent-attacks';
import IncidentAnalysis from './WAF/incident-analysis';
import securityImg from '../../images/application/v2-waf-5.355b858ea7a8909167bf.png';
import System from './WAF/system';
import Minimum from './WAF/minimum';
function WAF() {
  return (
    <section className='container m-auto bg-white text-darkBlue rounded-2xl'>
      <h1 className='underline text-center text-2xl font-bold pt-8 px-4 mb-3'>
        WEB APPLICATION FIREWALL SYSTEM V2 - WAF
      </h1>
      <div className='flex'>
        <div className='w-2/5'>
          <Security />
        </div>
        <div className='w-3/5'>
          <Description />
          <Plan />
          <Processing />
        </div>
      </div>
      <div className='p-8 flex items-center'>
        <div className='w-2/3'>
          <PreventAttacks />
          <IncidentAnalysis />
        </div>
        <LazyLoad className='w-1/3' offset={100} once>
          <img src={securityImg} alt={securityImg} />
        </LazyLoad>
      </div>
      <System />
      <Minimum />
    </section>
  );
}

export default WAF;
