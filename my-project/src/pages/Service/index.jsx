import React from 'react';
import { useTranslation } from 'react-i18next';
export default function Service() {
  const { t } = useTranslation();
  return (
    <section className=' flex flex-col justify-center items-center text-center py-16 my-44'>
      <i className='fa fa-signal text-8xl text-blue'></i>
      <div>
        <h1 className='text-6xl my-8'>{t('progress')}</h1>
        <h2 className='text-5xl font-bold  my-8'>{t('progress2')}</h2>
        <h4 className='text-darkGray text-xl'>{t('progress-content')}</h4>
      </div>
    </section>
  );
}
