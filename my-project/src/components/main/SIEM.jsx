import React from 'react';
import LazyLoad from 'react-lazyload';

import Collections from './SIEM/collections';
import Network from './SIEM/network';
import Processing from './SIEM/processing';
import Threat from './SIEM/threat';
import Vulnerability from './SIEM/vulnerability';
import Security from './SIEM/security';
import Incident from './SIEM/incident';
import System from './SIEM/system';

import v2siem from '../../images/information/v2-siem-6.3dc16344590ad630264b.png';
import { useTranslation } from 'react-i18next';

function SIEM() {
  const lazyLoadOptions = {
    offset: 100,
    once: true,
  };
  const { t } = useTranslation();
  return (
    <section
      id='siem'
      className='bg-white text-darkBlue container m-auto rounded-2xl my-12'
    >
      <LazyLoad {...lazyLoadOptions}>
        <h1 className='underline text-center text-2xl font-bold pt-8 px-4 Scale'>
          {t('SIEM.title')}
        </h1>
      </LazyLoad>
      <LazyLoad {...lazyLoadOptions}>
        <Collections />
      </LazyLoad>
      <LazyLoad {...lazyLoadOptions}>
        <Network />
      </LazyLoad>
      <div className='bg-blue mt-12 rounded-2xl p-8 lg:flex lg:flex-grow Right'>
        <LazyLoad className='lg:w-2/5' {...lazyLoadOptions}>
          <Processing />
        </LazyLoad>
        <div className='flex flex-col lg:w-3/5 mt-6 lg:mt-0'>
          <LazyLoad {...lazyLoadOptions}>
            <Threat />
          </LazyLoad>
          <LazyLoad {...lazyLoadOptions}>
            <Vulnerability />
          </LazyLoad>
        </div>
      </div>
      <div className='p-8 flex flex-col lg:flex-row items-center'>
        <LazyLoad className='lg:w-3/5' {...lazyLoadOptions}>
          <Security />
          <Incident />
        </LazyLoad>
        <LazyLoad {...lazyLoadOptions} className='lg:w-2/5 h-full'>
          <img className='w-full' src={v2siem} alt={v2siem} />
        </LazyLoad>
      </div>
      <System />
    </section>
  );
}

export default SIEM;
