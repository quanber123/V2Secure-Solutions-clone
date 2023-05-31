import React from 'react';
import { useTranslation } from 'react-i18next';

function SectionContact() {
  const { t } = useTranslation();
  return (
    <section className='w-full h-1/2 pt-32 md:pt-48 lg:pt-96'>
      <div
        className='contact-form-home absolute lg:top-1/3 left-1/2 container m-auto py-12 flex flex-col justify-center border-2 border-darkGreen rounded-xl'
        style={{
          background:
            'linear-gradient(150deg, #5a8488, #000913, #000913, #000913)',
        }}
      >
        <h1 className='xl:w-1/3 h-full mx-auto pb-8 lg:mb-14 text-center text-lg md:text-2xl lg:text-5xl font-bold'>
          {t('contact.content')}
        </h1>
        <div className='lg:w-1/3 m-auto relative'>
          <input
            className='w-full py-4 pl-4 pr-32 text-xl leading-3 rounded-2xl'
            type='email'
            placeholder='Email Address'
          />
          <button className='absolute top-2 right-5 py-2 px-5 rounded-2xl bg-boldBlue hover:bg-blue text-base'>
            Submit
          </button>
        </div>
      </div>
    </section>
  );
}

export default SectionContact;
