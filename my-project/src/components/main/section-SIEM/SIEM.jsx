import React from 'react';
import LazyLoad from 'react-lazyload';

import Collections from './1-collection-management';
import Network from './2-network-attack';
import Processing from './3-processing';
import Threat from './4-threat';
import Vulnerability from './5-vulnerability';
import Security from './6-security-automatically';
import Incident from './7-incident';
import System from './8-system';

import v2siem from '../../../images/information/v2-siem-6.3dc16344590ad630264b.png';
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
        <h1 className='lg:w-full md:w-11/12 m-auto underline text-center text-xl md:text-3xl font-bold pt-8 px-4 Scale'>
          {t('SIEM.title')}
        </h1>
      </LazyLoad>
      <LazyLoad {...lazyLoadOptions}>
        <Collections />
      </LazyLoad>
      <LazyLoad {...lazyLoadOptions}>
        <Network />
      </LazyLoad>
      <div className='bg-blue mt-12 rounded-2xl  p-8 lg:flex lg:flex-grow Right'>
        <LazyLoad className='w-full lg:w-2/5' {...lazyLoadOptions}>
          <Processing />
        </LazyLoad>
        <div className='flex flex-col w-full lg:w-3/5 mt-6 lg:mt-0'>
          <LazyLoad {...lazyLoadOptions}>
            <Threat />
          </LazyLoad>
          <LazyLoad {...lazyLoadOptions}>
            <Vulnerability />
          </LazyLoad>
        </div>
      </div>
      <div className='p-8 flex flex-col md:flex-row items-center'>
        <LazyLoad className='md:w-2/3 lg:w-3/5' {...lazyLoadOptions}>
          <Security />
          <Incident />
        </LazyLoad>
        <LazyLoad {...lazyLoadOptions} className='md:w-1/3 lg:w-2/5'>
          <img src={v2siem} alt={v2siem} />
        </LazyLoad>
      </div>
      <LazyLoad {...lazyLoadOptions}>
        <System />
      </LazyLoad>
    </section>
  );
}

export default SIEM;
