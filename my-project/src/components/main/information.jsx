import React from 'react';
import Collections from './information/collections';
import Network from './information/network';
import Processing from './information/processing';
import Threat from './information/threat';
import Vulnerability from './information/vulnerability';
import Security from './information/security';
import Incident from './information/incident';
import v2siem from '../../images/information/v2-siem-6.3dc16344590ad630264b.png';
import LazyLoad from 'react-lazyload';
import System from './information/system';
function Information() {
  return (
    <section className='bg-white text-darkBlue container m-auto rounded-2xl my-12'>
      <h1 className='underline text-center text-2xl font-bold pt-8 px-4'>
        CENTRALIZED INFORMATION SECURITY MONITORING MANAGEMENT SYSTEM V2 - SIEM
      </h1>
      <Collections />
      <Network />
      <div className='bg-blue mt-12 rounded-2xl p-8 flex'>
        <Processing />
        <div className='flex flex-col w-3/5'>
          <Threat />
          <Vulnerability />
        </div>
      </div>
      <div className='p-8 flex items-center'>
        <div className='w-3/5'>
          <Security />
          <Incident />
        </div>
        <LazyLoad className='w-2/5  h-full' offset={100} once>
          <img className='w-full' src={v2siem} alt={v2siem} />
        </LazyLoad>
      </div>
      <System />
    </section>
  );
}

export default Information;
