import React from 'react';
import { useTranslation } from 'react-i18next';
export default function Service() {
  const { t } = useTranslation();
  return (
    <section className=' flex flex-col justify-center items-center text-center py-44'>
      <i className='fa fa-signal text-6xl md:text-8xl text-blue'></i>
      <div>
        <h1 className='text-4xl md:text-6xl my-8'>{t('progress')}</h1>
        <h2 className='text-3xl md:text-5xl font-bold  py-8'>
          {t('progress2')}
        </h2>
        <h4 className='text-darkGray text-lg lg:text-xl'>
          {t('progress-content')}
        </h4>
      </div>
    </section>
  );
}
