import LazyLoad from 'react-lazyload';
import Function1 from './1-function-1';
import Function2 from './2-function-2';
import { useTranslation } from 'react-i18next';
import nacLogo from '../../../images/ecosystem/nac.png';
// import nacReport from '../../../images/gallery/header-2.15fda7c06337e76eaeb0.png';
import Gallery from '../gallery-section/index';
import DownLoadDataSheet from '../data-sheet/data-sheet';
import filePath from '../data-sheet/pdf/data-sheet/Document Cloud/Fortinet_Product_Matrix-part-4.pdf';
function NAC() {
  const { t } = useTranslation();
  const fileName = 'Fortinet_Product_Matrix-part-4.pdf';
  const lazyLoadOptions = {
    offset: 0,
    once: true,
  };
  return (
    <section>
      {/* <h1 className='hidden lg:block w-44 m-auto my-4 md:my-0 py-2 px-4 text-blue text-center rounded-xl border border-lightGray Scale'>
        FAGONET-NAC
      </h1> */}
      <h2 className='md:w-1/2 mx-auto md:py-8 text-center font-bold Scale'>
        {t('NAC.title')}
      </h2>
      <LazyLoad {...lazyLoadOptions}>
        <img
          className='mx-auto my-2 md:m-auto Scale'
          src={nacLogo}
          alt='nac-logo'
        />
      </LazyLoad>
      <LazyLoad {...lazyLoadOptions}>
        <DownLoadDataSheet filePath={filePath} fileName={fileName} />
      </LazyLoad>
      {/* <LazyLoad className='solutions-report-gallery' {...lazyLoadOptions}>
        <img
          className='w-full h-full m-auto Up'
          src={nacReport}
          alt='nac-report'
        />
      </LazyLoad> */}
      <LazyLoad className=' pb-32 lg:pb-64' {...lazyLoadOptions}>
        <Function1 />
      </LazyLoad>
      <LazyLoad className='pb-32' {...lazyLoadOptions}>
        <Function2 />
      </LazyLoad>
      <LazyLoad {...lazyLoadOptions}>
        <Gallery />
      </LazyLoad>
    </section>
  );
}

export default NAC;
