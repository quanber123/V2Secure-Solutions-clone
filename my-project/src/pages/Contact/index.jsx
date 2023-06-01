import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();
  const [contactForm, setContactForm] = useState([
    {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  ]);
  const [stateForm, setStateForm] = useState(false);
  const [stateAnimation, setStateAnimation] = useState(true);
  function handleChangeContact(event) {
    const { name, value } = event.target;
    setContactForm((prevContact) => {
      return { ...prevContact, [name]: value, id: new Date().getTime() };
    });
  }
  const handleSubmitForm = (e) => {
    e.preventDefault();
    setStateForm(true);
    setTimeout(() => {
      setStateForm(false);
    }, 1500);
    setTimeout(() => {
      setStateAnimation(false);
    }, 1000);
    setContactForm(() => {
      return {
        name: '',
        email: '',
        phone: '',
        message: '',
      };
    });
  };
  return (
    <section className='contact-form container mx-auto md:my-16 px-16 py-14 flex flex-col md:flex-row justify-between Up'>
      <div className='md:w-1/2'>
        <h1 className='text-2xl md:text-4xl xl:text-6xl font-bold'>
          {t('form.title1')}{' '}
          <span className='text-yellow'>{t('form.title2')}</span>
        </h1>
        <h3 className='text-lg lg:text-xl text-darkGray py-4'>
          {t('form.idea')}
        </h3>
        <ul className='font-medium my-8 p-4 lg:w-3/4 '>
          <li className='flex py-4 border-blue border-b '>
            <i className='fa fa-check mr-2'></i>
            <p>{t('form.content1')}</p>
          </li>
          <li className='flex py-4 border-blue border-b '>
            <i className='fa fa-check mr-2'></i>
            <p>{t('form.content2')}</p>
          </li>
          <li className='flex py-4'>
            <i className='fa fa-check mr-2'></i>
            <p>{t('form.content3')}</p>
          </li>
        </ul>
      </div>
      <form className='md:w-1/2 p-8 ' method='POST' onSubmit={handleSubmitForm}>
        {stateForm && (
          <div
            className={`bg-white m-auto text-black text-center font-bold flex flex-col justify-between ${
              stateAnimation ? 'downAlter' : 'hideAlter'
            }`}
          >
            <i className='h-1/2 fa fa-check text-2xl mt-2'></i>
            <p className='h-1/2 text-lg my-2'>
              Thank You! Form Submitted Successfully.
            </p>
          </div>
        )}
        <input
          className='w-full rounded-lg px-4 py-2 border border-boldBlue my-2'
          type='text'
          name='name'
          value={contactForm.name}
          onChange={handleChangeContact}
          checked
          required
          placeholder='Name'
        />
        <input
          className='w-full rounded-lg  px-4 py-2 border border-boldBlue my-2'
          type='email'
          name='email'
          value={contactForm.email}
          onChange={handleChangeContact}
          checked
          required
          placeholder='Email'
        />
        <input
          className='w-full rounded-lg px-4 py-2 border border-boldBlue my-2'
          type='text'
          name='phone'
          value={contactForm.phone}
          onChange={handleChangeContact}
          checked
          required
          placeholder='Phone'
        />
        <textarea
          className='w-full rounded-lg  px-4 py-2 border border-boldBlue  my-2 focus:outline-none'
          name='message'
          id='message'
          cols='25'
          rows='10'
          value={contactForm.message}
          onChange={handleChangeContact}
          checked
          placeholder='Your Message'
        ></textarea>
        <button
          type='submit'
          className='w-full rounded-xl py-5 my-4 bg-yellow hover:bg-boldBlue text-black font-bold transition-all'
        >
          Submit
        </button>
      </form>
    </section>
  );
}
