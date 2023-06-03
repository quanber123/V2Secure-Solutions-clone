import React from 'react';
import MultiTask from './1-multi-task';
import Incident from './2-incident';
import System from './3-system';
import Deployment from './4-deployment';
import { useTranslation } from 'react-i18next';
import LazyLoad from 'react-lazyload';
import edrLogo from '../../../images/ecosystem/edr.png';
import DownLoadDataSheet from '../../data-sheet/data-sheet';
// import edrReport from '../../../images/gallery/header-7.c4c8a78b8f66aa9524dd.png';
import Gallery from '../gallery-section/index';
import filePath from '../../data-sheet/pdf/data-sheet/Document Cloud/Fortinet_Product_Matrix-part-5.pdf';
function EDR() {
  const { t } = useTranslation();
  const fileName = 'Fortinet_Product_Matrix-part-5.pdf';
  const lazyLoadOptions = {
    offset: 0,
    once: true,
  };
  return (
    <section>
      {/* <h1 className='hidden lg:block w-44 m-auto my-4 md:my-0 py-2 px-4 text-blue text-center rounded-xl border border-lightGray Scale'>
        FAGONET-NIPS
      </h1> */}
      <h2 className='md:w-1/2 mx-auto md:py-8 text-lg md:text-2xl lg:text-4xl text-center font-bold Scale'>
        {t('EDR.title')}
      </h2>
      <LazyLoad {...lazyLoadOptions}>
        <img
          className='mx-auto my-2 md:m-auto Scale'
          src={edrLogo}
          alt='edr-logo'
        />
      </LazyLoad>
      <LazyLoad {...lazyLoadOptions}>
        <DownLoadDataSheet filePath={filePath} fileName={fileName} />
      </LazyLoad>
      {/* <LazyLoad className='solutions-report-gallery Up' {...lazyLoadOptions}>
        <img
          className='w-full h-full m-auto'
          src={edrReport}
          alt='edr-report'
        />
      </LazyLoad> */}
      <LazyLoad className='pb-32 lg:pb-64' {...lazyLoadOptions}>
        <MultiTask />
      </LazyLoad>
      <LazyLoad className='pb-32 lg:pb-64' {...lazyLoadOptions}>
        <Incident />
      </LazyLoad>
      <LazyLoad className='pb-32 lg:pb-64' {...lazyLoadOptions}>
        <System />
      </LazyLoad>
      <LazyLoad className='pb-32' {...lazyLoadOptions}>
        <Deployment />
      </LazyLoad>
      <LazyLoad {...lazyLoadOptions}>
        <Gallery />
      </LazyLoad>
    </section>
  );
}

export default EDR;
