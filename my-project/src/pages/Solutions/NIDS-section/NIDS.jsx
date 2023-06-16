import { useTranslation } from 'react-i18next';
import LazyLoad from 'react-lazyload';
import edrLogo from '../../../images/ecosystem/edr.png';
import DownLoadDataSheet from '../../data-sheet/data-sheet';
import Gallery from '../gallery-section/index';
import filePath from '../../data-sheet/pdf/data-sheet/Document Cloud/Fortinet_Product_Matrix-part-5.pdf';
import IntrusionDetection from './intrusion-detection';
import AlertsNotifications from './alerts-notifications';
import DetailedLogging from './detailed-logging';
import AutoMaticBlocking from './automatic-blocking';
import FormatRules from './format-rules';
import EnhancingNetWork from './enhancing-network';
function NIDS() {
  const { t } = useTranslation();
  const fileName = 'Fortinet_Product_Matrix-part-5.pdf';
  const lazyLoadOptions = {
    offset: 0,
    once: true,
  };
  return (
    <section>
      <h2 className='md:w-1/2 mx-auto md:py-8 text-center font-bold Scale'>
        {t('NIDS.title')}
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
        <IntrusionDetection />
      </LazyLoad>
      <LazyLoad className='pb-32' {...lazyLoadOptions}>
        <AlertsNotifications />
      </LazyLoad>
      <LazyLoad className='pb-32' {...lazyLoadOptions}>
        <DetailedLogging />
      </LazyLoad>
      <LazyLoad className='pb-32' {...lazyLoadOptions}>
        <AutoMaticBlocking />
      </LazyLoad>
      <LazyLoad className='pb-32' {...lazyLoadOptions}>
        <FormatRules />
      </LazyLoad>
      <LazyLoad className='pb-32' {...lazyLoadOptions}>
        <EnhancingNetWork />
      </LazyLoad>
      <LazyLoad {...lazyLoadOptions}>
        <Gallery />
      </LazyLoad>
    </section>
  );
}

export default NIDS;
