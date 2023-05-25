import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
function Page404() {
  const { t } = useTranslation();
  return (
    <>
      <section className='bg-white h-screen w-full text-darkBlue flex flex-col justify-center items-center'>
        <h1 className='text-4xl'>{t('errTitle')}!</h1>
        <h2 className='text-2xl lg:text-3xl my-16 text-center'>
          {t('errContent')}
        </h2>
        <Link
          className='text-3xl px-8 py-4 bg-darkBlue text-white rounded-3xl'
          to='/'
        >
          GO TO HOMEPAGE
        </Link>
      </section>
    </>
  );
}

export default Page404;
