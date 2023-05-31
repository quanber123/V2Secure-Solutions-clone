import React, { useState } from 'react';

export default function Contact() {
  const [contactForm, setContactForm] = useState([
    {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  ]);
  function handleChangeContact(event) {
    const { name, value } = event.target;
    setContactForm((prevContact) => {
      return { ...prevContact, [name]: value, id: new Date().getTime() };
    });
  }
  return (
    <section className='contact-form container mx-auto my-16 px-16 py-14 flex flex-col md:flex-row justify-between'>
      <div className='md:w-1/2'>
        <h1 className='text-6xl font-bold'>
          Let's Work <span className='text-yellow'>Together</span>
        </h1>
        <h3 className='text-xl text-darkGray my-4'>
          Tell us about yourself and we’ll figure out the best solution for you
          and your organization’s needs.
        </h3>
        <ul className='font-medium my-8 p-4 w-3/4 '>
          <li className='flex my-4 border-blue border-b pb-4'>
            <i className='fa fa-check mr-2'></i>
            <p>
              One flexible tool for your entire company to share knowledge, ship
              projects, and collaborate.
            </p>
          </li>
          <li className='flex my-4 border-blue border-b pb-4'>
            <i className='fa fa-check mr-2'></i>
            <p>
              Enterprise features to securely manage user access and security.
            </p>
          </li>
          <li className='flex my-4'>
            <i className='fa fa-check mr-2'></i>
            <p>
              Dedicated support to work with you on your setup and help you
              build the best plan for your company.
            </p>
          </li>
        </ul>
      </div>
      <form className='md:w-1/2 p-8 ' method='POST'>
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
