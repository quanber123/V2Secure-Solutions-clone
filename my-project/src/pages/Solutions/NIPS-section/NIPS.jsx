import React from 'react';
import Networking from './1-networking';
import Cyber from './2-cyber';
import System from './3-system';
import LazyLoad from 'react-lazyload';
import { useTranslation } from 'react-i18next';
import nipsLogo from '../../../images/ecosystem/nips.png';
import DownLoadDataSheet from '../../data-sheet/data-sheet';
import nipsReport from '../../../images/gallery/header-6.987988888e628d2df2fd.png';
function NIPS() {
  const { t } = useTranslation();
  const filePath = '../../data-sheet/pdf/data-sheet/Document Cloud';
  const fileName = 'Fortinet_Product_Matrix-part-3.pdf';
  const lazyLoadOptions = {
    offset: 0,
    once: true,
  };
  return (
    <section>
      <h1 className='hidden lg:block w-44 m-auto my-4 md:my-0 py-2 px-4 text-blue text-center rounded-xl border border-lightGray Scale'>
        FAGONET-NIPS
      </h1>
      <h2 className='md:w-1/2 mx-auto md:py-8 text-lg md:text-2xl lg:text-4xl text-center font-bold Scale'>
        {t('NIPS.title')}
      </h2>
      <LazyLoad {...lazyLoadOptions}>
        <img
          className='mx-auto my-2 md:m-auto Scale'
          src={nipsLogo}
          alt='nips-logo'
        />
      </LazyLoad>
      <LazyLoad {...lazyLoadOptions}>
        <DownLoadDataSheet filePath={filePath} fileName={fileName} />
      </LazyLoad>
      <LazyLoad className='solutions-report-gallery' {...lazyLoadOptions}>
        <img
          className='w-full h-full m-auto Up'
          src={nipsReport}
          alt='nips-report'
        />
      </LazyLoad>
      <LazyLoad className='' {...lazyLoadOptions}>
        <Networking />
      </LazyLoad>
      <LazyLoad className=' pb-32 lg:pb-64' {...lazyLoadOptions}>
        <Cyber />
      </LazyLoad>
      <LazyLoad className='' {...lazyLoadOptions}>
        <System />
      </LazyLoad>
    </section>
  );
}

export default NIPS;
