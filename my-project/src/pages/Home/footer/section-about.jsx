import React from 'react';
import logo from '../../../images/ecosystem/download.png';
import qr from '../../../images/contact/scan-icon.9a8b224f402749907bca.png';
import LazyLoad from 'react-lazyload';
function SectionAbout() {
  return (
    <section
      className='w-full h-1/2 flex border-t border-t-boldBlue px-14 py-32'
      style={{
        background:
          'linear-gradient(150deg,rgba(176, 176, 176, 0.2),rgba(103, 102, 102, 0.2))',
      }}
    >
      <div className='w-1/2'>
        <div className='flex items-center'>
          <LazyLoad className='h-1/2' offset={100} once>
            <img className='h-10' src={logo} alt='logoV2' />
          </LazyLoad>
          <h1 className='text-4xl mx-4'>V2Secure</h1>
        </div>
        <div className='text-lg'>
          <p className='w-1/3 my-4 py-3 px-4 text-center text-base border border-boldBlue text-blue rounded-2xl'>
            CONTACT US - AVAILABLE 24X7
          </p>
          <p className='my-2'>0869 061 186</p>
          <p className='my-2'>v2secure.vn</p>
          <p className='my-2'>
            Số 3, ngách 281/75/15 Trương Định, Tương Mai, Hoàng Mai, Hà Nội,
            Việt Nam
          </p>
        </div>
      </div>
      <div className='w-1/2 flex justify-center items-center'>
        <LazyLoad className='h-full'>
          <img className='h-full' src={qr} alt='qr' />
        </LazyLoad>
        <div className='text-lg md:text-xl font-bold md:p-2 m-2'>
          <h3 className='text-blue'>SCAN FOR</h3>
          <h3>MORE DETAILS</h3>
        </div>
      </div>
    </section>
  );
}

export default SectionAbout;
