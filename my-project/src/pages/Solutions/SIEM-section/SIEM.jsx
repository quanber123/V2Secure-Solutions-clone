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
import siemLogo from '../../../images/ecosystem/siem.png';
import siemReport from '../../../images/gallery/header-1.e29951c6bf7cdf15c303.png';
import DownLoadDataSheet from '../../data-sheet/data-sheet';
function SIEM() {
  const filePath = '../../data-sheet/pdf/data-sheet/Document Cloud';
  const fileName = 'Fortinet_Product_Matrix-part-1.pdf';
  const lazyLoadOptions = {
    offset: 0,
    once: true,
  };
  const { t } = useTranslation();
  return (
    <section>
      <h1 className='hidden lg:block w-32 m-auto my-4 md:my-0 py-2 px-4 text-blue text-center rounded-xl border border-lightGray Scale'>
        V2-SIEM
      </h1>
      <h2 className='md:w-1/2 mx-auto md:py-8 text-lg md:text-2xl lg:text-4xl text-center font-bold Scale'>
        {t('SIEM.title')}
      </h2>
      <LazyLoad {...lazyLoadOptions}>
        <img
          className='mx-auto my-2 md:m-auto Scale'
          src={siemLogo}
          alt='siem-logo'
        />
      </LazyLoad>
      <LazyLoad {...lazyLoadOptions}>
        <DownLoadDataSheet filePath={filePath} fileName={fileName} />
      </LazyLoad>
      <LazyLoad className='solutions-report-gallery' {...lazyLoadOptions}>
        <img
          className='w-full h-full m-auto Up'
          src={siemReport}
          alt='siem-report'
        />
      </LazyLoad>
      <LazyLoad className='pb-32 lg:pb-64' {...lazyLoadOptions}>
        <Collections />
      </LazyLoad>
      <LazyLoad className='pb-32 lg:pb-64' {...lazyLoadOptions}>
        <Network />
      </LazyLoad>
      <LazyLoad
        className='flex flex-col lg:flex-row justify-around pb-32 lg:pb-64'
        {...lazyLoadOptions}
      >
        <Processing />
        <Threat />
      </LazyLoad>
      <LazyLoad className='pb-32 lg:pb-64' {...lazyLoadOptions}>
        <Vulnerability />
      </LazyLoad>
      <LazyLoad className='pb-32 lg:pb-64' {...lazyLoadOptions}>
        <Security />
      </LazyLoad>
      <LazyLoad className='pb-32 lg:pb-64' {...lazyLoadOptions}>
        <Incident />
      </LazyLoad>
      <LazyLoad className='' {...lazyLoadOptions}>
        <System />
      </LazyLoad>
    </section>
  );
}

export default SIEM;
