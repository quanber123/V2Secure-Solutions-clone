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
import { useTranslation } from 'react-i18next';
function WAF() {
  const { t } = useTranslation();
  const lazyLoadOptions = {
    offset: 100,
    once: true,
  };
  return (
    <section
      id='waf'
      className='container m-auto bg-white text-darkBlue rounded-2xl'
    >
      <LazyLoad {...lazyLoadOptions}>
        <h1 className='underline text-center text-2xl font-bold pt-8 px-4 mb-3 Scale'>
          {t('WAF.title')}
        </h1>
      </LazyLoad>
      <div className='flex flex-col md:flex-row'>
        <div className='lg:w-2/5'>
          <LazyLoad className='h-full' {...lazyLoadOptions}>
            <Security />
          </LazyLoad>
        </div>
        <div className='lg:w-3/5'>
          <LazyLoad {...lazyLoadOptions}>
            <Description />
          </LazyLoad>
          <LazyLoad {...lazyLoadOptions}>
            <Plan />
          </LazyLoad>
          <LazyLoad {...lazyLoadOptions}>
            <Processing />
          </LazyLoad>
        </div>
      </div>
      <div className='p-8 flex flex-col md:flex-row items-center'>
        <div className='lg:w-2/3'>
          <LazyLoad {...lazyLoadOptions}>
            <PreventAttacks />
            <IncidentAnalysis />
          </LazyLoad>
        </div>
        <LazyLoad className='md:w-1/3' {...lazyLoadOptions}>
          <img src={securityImg} alt={securityImg} />
        </LazyLoad>
      </div>
      <LazyLoad {...lazyLoadOptions}>
        <System />
      </LazyLoad>
      <LazyLoad {...lazyLoadOptions}>
        <Minimum />
      </LazyLoad>
    </section>
  );
}

export default WAF;
