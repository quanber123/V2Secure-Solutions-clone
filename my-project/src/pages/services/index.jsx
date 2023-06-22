import { useTranslation } from 'react-i18next';
import ServicesList from './services-list';
<<<<<<< HEAD
import ImplementationProcess from './implementation-process';
=======
// import ServicesList from './services-list-demo';
import ImplementProcess from './implement-process';
>>>>>>> e4a5935 (complete scroll animation)
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
      <LazyLoad className='my-16' offset={0} once>
        <ServicesList />
      </LazyLoad>
<<<<<<< HEAD
      <LazyLoad offset={0} once>
        <ImplementationProcess />
=======
      <LazyLoad className='my-16' offset={0} once>
        <ImplementProcess />
>>>>>>> e4a5935 (complete scroll animation)
      </LazyLoad>
    </main>
  );
}
