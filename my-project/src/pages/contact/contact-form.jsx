import { useState } from 'react';
import { useTranslation } from 'react-i18next';
function ContactForm() {
  const { t } = useTranslation();
  const [contactForm, setContactForm] = useState([
    {
      name: '',
      email: '',
      message: '',
      terms: false,
    },
  ]);
  function handleChangeContact(event) {
    const { name, type, value, checked } = event.target;
    setContactForm((prevContact) => {
      return {
        ...prevContact,
        [name]: type === 'checkbox' ? checked : value,
        id: new Date().getTime(),
      };
    });
  }
  const handleSubmitForm = (e) => {
    e.preventDefault();
    setContactForm(() => {
      return {
        name: '',
        email: '',
        message: '',
      };
    });
  };
  return (
<<<<<<< HEAD
    <form className='contact-form Up' onSubmit={handleSubmitForm}>
      <h5 className='text-white text-[40px] font-bold'>{t('mess')}</h5>
      <p>{t('askQuestion')}</p>
      <label htmlFor='name'>Name</label>
      <input
        type='text'
        name='name'
        value={contactForm.name}
        onChange={handleChangeContact}
        checked
        required
        placeholder='Enter Your Name...'
      />
      <label htmlFor='email'>Email</label>
      <input
        type='email'
        name='email'
        value={contactForm.email}
        onChange={handleChangeContact}
        checked
        required
        placeholder='Enter Your Email...'
      />
      <label htmlFor='message'>Message</label>
      <textarea
        name='message'
        id='message'
        cols='25'
        rows='10'
        value={contactForm.message}
        onChange={handleChangeContact}
        placeholder='Enter Your Message...'
      ></textarea>
      <div className='my-8 flex items-center'>
        <div className='flex items-center'>
          <input
            type='checkbox'
            name='terms'
            checked={contactForm.terms}
            onChange={handleChangeContact}
          />
          <label
            className='text-[16px] font-normal text-white mx-4'
            htmlFor='terms'
=======
    <div className='relative my-16 py-[40px]'>
      <div>
        <LazyLoad className='map-img' offset={100} once>
          <img className='Scale' src={mapImg} alt='map-img' />
        </LazyLoad>
        <div className='Scale map-info'>
          <h3 className='text-[32px] font-bold'>FAGONET</h3>
          <p className='text-[20px] text-darkBlue'>{t('about.district')}</p>
        </div>
      </div>
      <form className='contact-form Up' onSubmit={handleSubmitForm}>
        <h5 className='text-darkBlue text-[40px] font-bold'>{t('mess')}</h5>
        <p>{t('askQuestion')}</p>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          name='name'
          value={contactForm.name}
          onChange={handleChangeContact}
          checked
          required
          placeholder='Enter Your Name...'
        />
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          value={contactForm.email}
          onChange={handleChangeContact}
          checked
          required
          placeholder='Enter Your Email...'
        />
        <label htmlFor='message'>Message</label>
        <textarea
          name='message'
          id='message'
          cols='25'
          rows='10'
          value={contactForm.message}
          onChange={handleChangeContact}
          placeholder='Enter Your Message...'
        ></textarea>
        <div className='my-8 flex items-center'>
          <div className='flex items-center'>
            <input
              type='checkbox'
              name='terms'
              checked={contactForm.terms}
              onChange={handleChangeContact}
            />
            <label
              className='text-[16px] font-normal text-white mx-4'
              htmlFor='terms'
            >
              {t('term')}
            </label>
          </div>
          <button
            className='w-[178px] bg-darkBlue text-white font-bold p-4 rounded-[25px]'
            type='submit'
>>>>>>> 1aa5ac3 (fix font-size)
          >
            {t('term')}
          </label>
        </div>
        <button
          className='w-[178px] bg-blue  text-white font-bold p-4 rounded-[25px]'
          type='submit'
        >
          Submit
        </button>
      </div>
    </form>
  );
}
export default ContactForm;
