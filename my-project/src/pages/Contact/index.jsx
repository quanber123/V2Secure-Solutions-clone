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
    <section className='container mx-auto my-16 px-16 py-14 bg-white text-darkBlue flex flex-col md:flex-row justify-between rounded-lg'>
      <div className='md:w-1/2'>
        <h1 className='text-6xl font-bold'>Contact Us</h1>
        <h3 className='text-xl text-darkGray my-4'>
          Let's explore how Notion can work for you
        </h3>
        <ul className='font-medium my-8 p-4 w-3/4 border-gray border rounded bg-gray'>
          <li className='flex my-4 border-darkBlue border-b pb-4'>
            <i className='fa fa-check mr-2'></i>
            <p>
              One flexible tool for your entire company to share knowledge, ship
              projects, and collaborate.
            </p>
          </li>
          <li className='flex my-4 border-darkBlue border-b pb-4'>
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
      <form
        className='md:w-1/2 contact-form p-8 bg-white border-darkBlue '
        method='POST'
      >
        <input
          className='w-3/4 rounded-lg px-4 py-2 border border-darkBlue my-2'
          type='text'
          name='name'
          value={contactForm.name}
          onChange={handleChangeContact}
          checked
          required
          placeholder='Name'
        />
        <input
          className='w-3/4 rounded-lg  px-4 py-2 border border-darkBlue my-2'
          type='email'
          name='email'
          value={contactForm.email}
          onChange={handleChangeContact}
          checked
          required
          placeholder='Email'
        />
        <input
          className='w-3/4 rounded-lg px-4 py-2 border border-darkBlue my-2'
          type='text'
          name='phone'
          value={contactForm.phone}
          onChange={handleChangeContact}
          checked
          required
          placeholder='Phone'
        />
        <textarea
          className='w-3/4 rounded-lg  px-4 py-2 border border-darkBlue  my-2 focus:outline-none'
          name='message'
          id='message'
          cols='25'
          rows='10'
          value={contactForm.message}
          onChange={handleChangeContact}
          checked
          placeholder='Your Message'
        ></textarea>
        <div className='w-3/4 px-16 mr-auto'>
          <button
            type='submit'
            className='w-1/2 rounded-lg px-4 py-2 my-4 mx-2 bg-black hover:bg-darkBlue text-white transition-all'
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
