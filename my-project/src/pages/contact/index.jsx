// import { useState } from 'react';
// import { useTranslation } from 'react-i18next';
import LazyLoad from 'react-lazyload';
import ContactInfo from './contact-info';
import ContactForm from './contact-form';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
export default function Contact() {
  const { t } = useTranslation();
  return (
    <main className='container m-auto'>
      <section className='my-8 flex'>
        <Link to='..'>Home</Link>
        <span className='mx-2'>&gt;</span>
        <h5>{t('CONTACT')}</h5>
      </section>
      <section>
        <h3 className='my-8 tracking-[18px] text-center text-[64px] font-bold uppercase'>
          {t('CONTACT')}
        </h3>
        <LazyLoad>
          <ContactInfo />
        </LazyLoad>
        <LazyLoad>
          <ContactForm />
        </LazyLoad>
      </section>
    </main>
  );
}
