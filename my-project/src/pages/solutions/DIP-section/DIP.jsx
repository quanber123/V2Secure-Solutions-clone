import { useTranslation } from 'react-i18next';
import LazyLoad from 'react-lazyload';
import edrLogo from '../../../images/ecosystem/edr.png';
import Gallery from '../gallery-section/index';
import ReceivingPackets from './receiving-packets';
import InputAnalysis from './input-analysis';
import DecodeAssemble from './decode-assemble';
import ContentAnalysis from './content-analysis';
import Response from './response';
import DownLoadDataSheet from '../data-sheet/data-sheet';
import filePath from '../data-sheet/pdf/data-sheet/Document Cloud/Fortinet_Product_Matrix-part-5.pdf';
function DIP() {
  const { t } = useTranslation();
  const fileName = 'Fortinet_Product_Matrix-part-5.pdf';
  const lazyLoadOptions = {
    offset: 0,
    once: true,
  };
  return (
    <section>
      <h2 className='md:w-1/2 mx-auto md:py-8 text-center font-bold Scale'>
        {t('DIP.title')}
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
      <LazyLoad className='pb-32' {...lazyLoadOptions}>
        <ReceivingPackets />
      </LazyLoad>
      <LazyLoad className='pb-32' {...lazyLoadOptions}>
        <InputAnalysis />
      </LazyLoad>
      <LazyLoad className='pb-32' {...lazyLoadOptions}>
        <DecodeAssemble />
      </LazyLoad>
      <LazyLoad className='pb-32' {...lazyLoadOptions}>
        <ContentAnalysis />
      </LazyLoad>
      <LazyLoad className='pb-32' {...lazyLoadOptions}>
        <Response />
      </LazyLoad>
      <LazyLoad {...lazyLoadOptions}>
        <Gallery />
      </LazyLoad>
    </section>
  );
}

export default DIP;
