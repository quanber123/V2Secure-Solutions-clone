import React from 'react';
import LazyLoad from 'react-lazyload';
import phone from '../../images/contact/download.png';
import web from '../../images/contact/download (1).png';
import location from '../../images/contact/download (2).png';
import qr from '../../images/contact/scan-icon.9a8b224f402749907bca.png';
function Contact() {
  return (
    <section className='container m-auto bg-white text-darkBlue rounded-2xl my-12'>
      <h1 className='underline text-center text-2xl font-bold pt-8 px-4'>
        ABOUT US
      </h1>
      <div className='p-8 text-center text-2xl font-semibold'>
        <h3 className='my-2'>Cybersecurity Ecosystem</h3>
        <h3 className='my-2'>V2SECURE Solutions</h3>
      </div>
      <div className='p-8 bg-blue text-white rounded-b-2xl'>
        <h3 className='font-bold text-xl px-8'>Contact</h3>
        <div className='flex'>
          <div className='px-8 py-4 text-lg'>
            <div className='flex items-center py-2'>
              <LazyLoad className='mr-4' offset={100} once>
                <img src={phone} alt={phone} />
              </LazyLoad>
              <p>0869 061 186</p>
            </div>
            <div className='flex items-center py-2'>
              <LazyLoad className='mr-4' offset={100} once>
                <img src={web} alt={web} />
              </LazyLoad>
              <p>v2secure.vn</p>
            </div>
            <div className='flex items-center py-2'>
              <LazyLoad className='mr-4' offset={100} once>
                <img src={location} alt={location} />
              </LazyLoad>
              <p>
                No. 3, lane 281/75/15 Truong Dinh, Tuong Mai, Hoang Mai
                District, Hanoi City, Vietnam
              </p>
            </div>
          </div>
          <div className='flex items-end'>
            <LazyLoad>
              <img src={qr} alt={qr} />
            </LazyLoad>
            <div className='text-xl font-bold p-2 m-2'>
              <h3 className='text-yellow'>SCAN FOR</h3>
              <h3>MORE DETAILS</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
