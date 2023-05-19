import React from 'react';
import Collections from './SIEM/collections';
import Network from './SIEM/network';
import Processing from './SIEM/processing';
import Threat from './SIEM/threat';
import Vulnerability from './SIEM/vulnerability';
import Security from './SIEM/security';
import Incident from './SIEM/incident';
import v2siem from '../../images/information/v2-siem-6.3dc16344590ad630264b.png';
import LazyLoad from 'react-lazyload';
import System from './SIEM/system';
function SIEM() {
  return (
    <section
      id='siem'
      className='bg-white text-darkBlue container m-auto rounded-2xl my-12'
    >
      <h1 className='underline text-center text-2xl font-bold pt-8 px-4'>
        CENTRALIZED INFORMATION SECURITY MONITORING MANAGEMENT SYSTEM V2 - SIEM
      </h1>
      <Collections />
      <Network />
      <div className='bg-blue mt-12 rounded-2xl p-8 lg:flex lg:flex-grow'>
        <Processing />
        <div className='flex flex-col lg:w-3/5 mt-6 lg:mt-0'>
          <Threat />
          <Vulnerability />
        </div>
      </div>
      <div className='p-8 flex flex-col lg:flex-row items-center'>
        <div className='lg:w-3/5'>
          <Security />
          <Incident />
        </div>
        <LazyLoad className='lg:w-2/5  h-full' offset={100} once>
          <img className='w-full' src={v2siem} alt={v2siem} />
        </LazyLoad>
      </div>
      <System />
    </section>
  );
}

export default SIEM;
