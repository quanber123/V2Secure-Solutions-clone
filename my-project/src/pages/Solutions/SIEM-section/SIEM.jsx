import React from 'react';
import LazyLoad from 'react-lazyload';
import { useTranslation } from 'react-i18next';
import Collections from './1-collection-management';
import Network from './2-network-attack';
import Processing from './3-processing';
import Threat from './4-threat';
import Vulnerability from './5-vulnerability';
import Security from './6-security-automatically';
import Incident from './7-incident';
import System from './8-system';
import v2siem from '../../../images/information/v2-siem-6.3dc16344590ad630264b.png';
import siemLogo from '../../../images/ecosystem/siem.png';
function SIEM() {
  const lazyLoadOptions = {
    offset: 0,
    once: true,
  };
  const { t } = useTranslation();
  return (
    <section>
      <h1 className='w-32 m-auto py-2 px-4 text-blue text-center rounded-xl border border-lightGray'>
        V2-SIEM
      </h1>
      <h2 className='w-1/2 mx-auto my-8 text-4xl text-center font-bold'>
        {t('SIEM.title')}
      </h2>
      <LazyLoad {...lazyLoadOptions}>
        <img className='m-auto' src={siemLogo} alt='siem-logo' />
      </LazyLoad>
      <LazyLoad className='bg-black pb-64' {...lazyLoadOptions}>
        <Collections />
      </LazyLoad>
      <LazyLoad className='bg-black pb-64' {...lazyLoadOptions}>
        <Network />
      </LazyLoad>
      <LazyLoad
        className='bg-black flex justify-around pb-64'
        {...lazyLoadOptions}
      >
        <Processing />
        <Threat />
      </LazyLoad>
      <LazyLoad className='bg-black pb-64' {...lazyLoadOptions}>
        <Vulnerability />
      </LazyLoad>
      <LazyLoad className='bg-black pb-64' {...lazyLoadOptions}>
        <Security />
      </LazyLoad>
      <LazyLoad className='bg-black pb-64' {...lazyLoadOptions}>
        <Incident />
      </LazyLoad>
      <LazyLoad className='bg-black pb-64' {...lazyLoadOptions}>
        <img className='m-auto w-1/4' src={v2siem} alt={v2siem} />
      </LazyLoad>
      <LazyLoad className='bg-black' {...lazyLoadOptions}>
        <System />
      </LazyLoad>
    </section>
  );
}

export default SIEM;
