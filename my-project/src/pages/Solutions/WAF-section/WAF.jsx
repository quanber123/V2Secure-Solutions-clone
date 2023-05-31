import React from 'react';
import LazyLoad from 'react-lazyload';
import Security from './3-security';
import Description from './1-function-description';
import Plan from './2-plan';
import Processing from './4-processing';
import PreventAttacks from './5-system-automatically';
import IncidentAnalysis from './6-incident-analysis';
import System from './7-system';
import Minimum from './8-minimum';
import { useTranslation } from 'react-i18next';
import wafLogo from '../../../images/ecosystem/waf.png';
function WAF() {
  const { t } = useTranslation();
  const lazyLoadOptions = {
    offset: 0,
    once: true,
  };
  return (
    <section>
      <h1 className='w-32 m-auto py-2 px-4 text-blue text-center rounded-xl border border-lightGray'>
        V2-WAF
      </h1>
      <h2 className='w-1/2 mx-auto my-8 text-4xl text-center font-bold'>
        {t('WAF.title')}
      </h2>
      <LazyLoad {...lazyLoadOptions}>
        <img className='m-auto' src={wafLogo} alt='waf-logo' />
      </LazyLoad>
      <LazyLoad className='bg-black' {...lazyLoadOptions}>
        <Description />
      </LazyLoad>
      <LazyLoad className='bg-black pb-64' {...lazyLoadOptions}>
        <Plan />
      </LazyLoad>
      <LazyLoad className='bg-black pb-64' {...lazyLoadOptions}>
        <Security />
      </LazyLoad>
      <LazyLoad className='bg-black pb-64' {...lazyLoadOptions}>
        <Processing />
      </LazyLoad>
      <LazyLoad className='bg-black pb-64' {...lazyLoadOptions}>
        <div className='container m-auto flex justify-between'>
          <PreventAttacks />
          <IncidentAnalysis />
        </div>
      </LazyLoad>
      <LazyLoad className='bg-black pb-64' {...lazyLoadOptions}>
        <System />
      </LazyLoad>
      <LazyLoad className='bg-black' {...lazyLoadOptions}>
        <Minimum />
      </LazyLoad>
    </section>
  );
}

export default WAF;
