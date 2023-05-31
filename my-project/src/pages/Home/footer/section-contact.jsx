import React from 'react';

function SectionContact() {
  return (
    <section className='w-full h-1/2 mt-96'>
      <div
        className='contact-form-home absolute top-1/3 left-1/2 container m-auto py-12 flex flex-col justify-center border-2 border-darkGreen rounded-xl'
        style={{
          background:
            'linear-gradient(150deg, #5a8488, #000913, #000913, #000913)',
        }}
      >
        <h1 className='w-1/3 h-full mx-auto mb-14 text-center text-5xl font-bold'>
          Need help with your security program?
        </h1>
        <div className='w-1/3 m-auto relative'>
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
