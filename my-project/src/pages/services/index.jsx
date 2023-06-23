import { useTranslation } from 'react-i18next';
import ServicesList from './services-list';
<<<<<<< HEAD
<<<<<<< HEAD
=======
// import ServicesList from './services-list-demo';
>>>>>>> e4a5935 (complete scroll animation)
=======
>>>>>>> 544bc47 (test)
import ImplementProcess from './implement-process';
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
      <h3 className='text-center text-[64px] tracking-[18px] font-bold uppercase Scale'>
        {t('our-services')}
      </h3>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 1aa5ac3 (fix font-size)
      <p className='my-4 text-[20px] text-white text-center'>
        {t('services-intro')}
      </p>
      <LazyLoad className='my-32' offset={0} once>
<<<<<<< HEAD
        <ServicesList />
      </LazyLoad>
      <LazyLoad className='my-32' offset={0} once>
=======
      <LazyLoad className='my-16' offset={0} once>
=======
>>>>>>> 1aa5ac3 (fix font-size)
        <ServicesList />
      </LazyLoad>
<<<<<<< HEAD
      <LazyLoad className='my-16' offset={0} once>
<<<<<<< HEAD
>>>>>>> e4a5935 (complete scroll animation)
=======
=======
      <LazyLoad className='my-32' offset={0} once>
>>>>>>> 0260109 (fix font-size)
>>>>>>> 1aa5ac3 (fix font-size)
        <ImplementProcess />
      </LazyLoad>
    </main>
  );
}
