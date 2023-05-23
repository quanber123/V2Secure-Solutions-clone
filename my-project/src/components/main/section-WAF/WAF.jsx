import React from 'react';
import LazyLoad from 'react-lazyload';
import Security from './3-security';
import Description from './1-function-description';
import Plan from './2-plan';
import Processing from './4-processing';
import PreventAttacks from './5-system-automatically';
import IncidentAnalysis from './6-incident-analysis';
import securityImg from '../../../images/application/v2-waf-5.355b858ea7a8909167bf.png';
import System from './7-system';
import Minimum from './8-minimum';
import { useTranslation } from 'react-i18next';
function WAF() {
  const { t } = useTranslation();
  const lazyLoadOptions = {
    offset: 0,
    once: true,
  };
  return (
    <section
      id='waf'
      className='container m-auto bg-white text-darkBlue rounded-2xl'
    >
      <LazyLoad {...lazyLoadOptions}>
        <h1 className='underline text-center text-xl md:text-3xl font-bold pt-8 px-4 mb-3 Scale'>
          {t('WAF.title')}
        </h1>
      </LazyLoad>
      <div className='flex flex-col-reverse md:flex-row'>
        <div className='w-full md:w-1/3 lg:w-2/5'>
          <LazyLoad className='h-full' {...lazyLoadOptions}>
            <Security />
          </LazyLoad>
        </div>
        <div className='w-full md:w-2/3 lg:w-3/5'>
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
        <div className='md:w-3/4 lg:w-2/3'>
          <LazyLoad {...lazyLoadOptions}>
            <PreventAttacks />
            <IncidentAnalysis />
          </LazyLoad>
        </div>
        <LazyLoad className='md:w-1/4 lg:w-1/3' {...lazyLoadOptions}>
          <img
            className='w-1/2 lg:w-full m-auto'
            src={securityImg}
            alt={securityImg}
          />
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
