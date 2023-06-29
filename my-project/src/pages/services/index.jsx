import { useTranslation } from 'react-i18next';
import ServicesList from './services-list';
// import ImplementProcess from './implement-process';
import LazyLoad from 'react-lazyload';
// import { Link } from 'react-router-dom';
import Spinner from '../../components/spinner/index';
export default function Services() {
  const { t } = useTranslation();
  return (
    <main className='container m-auto px-8 xl:px-0 py-8'>
      {/* <section className='flex'>
        <Link to='..'>Home</Link>
        <span className='mx-2'>&gt;</span>
        <h5>{t('SERVICES')}</h5>
      </section> */}
      <h3 className='my-8 lg:my-0 xl:text-[80px] lg:text-[64px] md:text-[52px] text-[32px] text-center md:tracking-[16px] tracking-[12px] font-bold uppercase Scale'>
        {t('our-services')}
      </h3>
      <p className='my-4 lg:text-[20px] text-[18px] text-white text-center Scale'>
        {t('services-intro')}
      </p>
      <LazyLoad className='my-16' offset={0} once placeholder={<Spinner />}>
        <ServicesList />
      </LazyLoad>
      {/* <LazyLoad className='my-16' offset={0} once>
        <ImplementProcess />
      </LazyLoad> */}
    </main>
  );
}
