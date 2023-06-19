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
import DownLoadDataSheet from '../../data-sheet/data-sheet';
import Gallery from '../gallery-section/index';
import filePath from '../../data-sheet/pdf/data-sheet/Document Cloud/Fortinet_Product_Matrix-part-1.pdf';
function SIEM() {
  const fileName = 'Fortinet_Product_Matrix-part-1.pdf';
  const lazyLoadOptions = {
    offset: 0,
    once: true,
  };
  const { t } = useTranslation();
  return (
    <section>
      <h2 className='md:w-1/2 mx-auto md:py-8 text-center font-bold Scale'>
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
      <LazyLoad className='pb-32' {...lazyLoadOptions}>
        <System />
      </LazyLoad>
      <LazyLoad {...lazyLoadOptions}>
        <Gallery />
      </LazyLoad>
    </section>
  );
}

export default SIEM;
