import  { useState } from 'react';
import { useTranslation } from 'react-i18next';

function SectionContact() {
  const { t } = useTranslation();
  const [stateAnimation, setStateAnimation] = useState(false);
  const [form, setForm] = useState([
    {
      email: '',
    },
  ]);
  const [stateForm, setStateForm] = useState(false);
  function handleChangeForm(event) {
    const { value } = event.target;
    setForm((prevForm) => {
      return { ...prevForm, email: value, id: new Date().getTime() };
    });
  }
  const handleSubmitForm = (e) => {
    e.preventDefault();
    setStateForm(true);
    setTimeout(() => {
      setStateForm(false);
    }, 1500);
    setStateAnimation((prevState) => !prevState);
    setTimeout(() => {
      setStateAnimation((prevState) => !prevState);
    }, 1000);
    setForm(() => {
      return {
        email: '',
      };
    });
  };
  return (
    <section className='w-full h-1/2 pt-32 md:pt-48 lg:pt-96'>
      <div className='contact-form-home absolute lg:top-1/3 left-1/2 container m-auto py-12 flex flex-col justify-center border-2 border-darkGreen rounded-xl'>
        <h1 className='xl:w-1/3 h-full mx-auto pb-8 lg:mb-14 text-center font-bold'>
          {t('contact.content')}
        </h1>
        {stateForm && (
          <div
            className={`thanks-form bg-white w-3/5 mx-auto mb-8 text-black text-center font-bold flex flex-col justify-between ${
              stateAnimation ? 'downAlter' : 'hideAlter'
            }`}
          >
            <i className='h-1/2 fa fa-check text-2xl mt-2'></i>
            <p className='h-1/2 text-lg my-2'>
              Thank You! Form Submitted Successfully.
            </p>
          </div>
        )}
        <form className='xl:w-1/3 m-auto relative' onSubmit={handleSubmitForm}>
          <input
            className='w-full py-4 pl-4 pr-32 text-xl leading-3 rounded-2xl'
            type='email'
            placeholder='Email Address'
            value={form.email}
            onChange={handleChangeForm}
            checked
            required
          />
          <button
            type='submit'
            className='absolute top-2 right-5 py-2 px-5 rounded-2xl bg-boldBlue hover:bg-blue text-base'
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default SectionContact;
