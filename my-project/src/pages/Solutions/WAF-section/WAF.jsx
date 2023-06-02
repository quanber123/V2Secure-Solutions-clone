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
import DownLoadDataSheet from '../../data-sheet/data-sheet';
import wafReport from '../../../images/gallery/header-2.15fda7c06337e76eaeb0.png';
function WAF() {
  const { t } = useTranslation();
  const filePath = '../../data-sheet/pdf/data-sheet/Document Cloud';
  const fileName = 'Fortinet_Product_Matrix-part-2.pdf';
  const lazyLoadOptions = {
    offset: 0,
    once: true,
  };
  return (
    <section>
      <h1 className='hidden lg:block w-44 m-auto my-4 md:my-0 py-2 px-4 text-blue text-center rounded-xl border border-lightGray Scale'>
        FAGONET-WAF
      </h1>
      <h2 className='md:w-1/2 mx-auto md:py-8 text-lg md:text-2xl lg:text-4xl text-center font-bold Scale'>
        {t('WAF.title')}
      </h2>
      <LazyLoad {...lazyLoadOptions}>
        <img
          className='mx-auto my-2 md:m-auto Scale'
          src={wafLogo}
          alt='waf-logo'
        />
      </LazyLoad>
      <LazyLoad {...lazyLoadOptions}>
        <DownLoadDataSheet filePath={filePath} fileName={fileName} />
      </LazyLoad>
      <LazyLoad className='solutions-report-gallery' {...lazyLoadOptions}>
        <img
          className='w-full h-full m-auto Up'
          src={wafReport}
          alt='waf-report'
        />
      </LazyLoad>
      <LazyLoad className='' {...lazyLoadOptions}>
        <Description />
      </LazyLoad>
      <LazyLoad className=' pb-32 lg:pb-64' {...lazyLoadOptions}>
        <Plan />
      </LazyLoad>
      <LazyLoad className=' pb-32 lg:pb-64' {...lazyLoadOptions}>
        <Security />
      </LazyLoad>
      <LazyLoad className=' pb-32 lg:pb-64' {...lazyLoadOptions}>
        <Processing />
      </LazyLoad>
      <LazyLoad className=' pb-32 lg:pb-64' {...lazyLoadOptions}>
        <div className='container m-auto flex flex-col xl:flex-row justify-between'>
          <PreventAttacks />
          <IncidentAnalysis />
        </div>
      </LazyLoad>
      <LazyLoad className='pb-32 lg:pb-64' {...lazyLoadOptions}>
        <System />
      </LazyLoad>
      <LazyLoad className='' {...lazyLoadOptions}>
        <Minimum />
      </LazyLoad>
    </section>
  );
}

export default WAF;
