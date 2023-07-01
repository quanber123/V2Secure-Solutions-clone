import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import img404 from '../../assets/images/404.png';
import LazyLoad from 'react-lazyload';
function Page404() {
  const { t } = useTranslation();
  return (
    <>
      <section className='w-full flex flex-col justify-center items-center my-32'>
        <h1 className='text-3xl font-bold'>ERROR PAGE</h1>
        <LazyLoad className='my-8'>
          <img src={img404} alt='404' />
        </LazyLoad>
        <p className='text-4xl font-bold'>Oops, Page Not Found</p>
        <p className='text-2xl font-bold my-8'>
          Sorry, But the page you are looking for doesn't exist!
        </p>
        <Link
          className='px-14 py-4 rounded-3xl font-bold bg-boldBlue text-black hover:bg-yellow'
          to='/'
        >
          Back to home
        </Link>
      </section>
    </>
  );
}

export default Page404;
