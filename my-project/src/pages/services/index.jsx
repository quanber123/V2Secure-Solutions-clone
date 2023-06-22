import { useTranslation } from 'react-i18next';
import ServicesList from './services-list';
// import ServicesList from './services-list-demo';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';
export default function Services() {
  const { t } = useTranslation();
  return (
    <main className='container m-auto px-8 xl:px-0 py-8'>
      <section className='flex'>
        <Link to='..'>Home</Link>
        <span className='mx-2'>&gt;</span>
        <h5>{t('SERVICES')}</h5>
      </section>
      <h3 className='text-center text-[64px] font-bold Scale'>
        {t('our-services')}
      </h3>
      <LazyLoad offset={0} once>
        <ServicesList />
      </LazyLoad>
    </main>
  );
}
