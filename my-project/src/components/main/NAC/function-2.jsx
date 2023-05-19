import React from 'react';
import LazyLoad from 'react-lazyload';
import function2Img from '../../../images/access/v2-nac-2.d2d5178610158a722098.png';
function Function2() {
  return (
    <div className='rounded-xl flex justify-between'>
      <LazyLoad
        className='w-1/2 p-40 bg-blue flex justify-center items-center'
        offset={100}
        once
      >
        <img className='h-2/3' src={function2Img} alt={function2Img} />
      </LazyLoad>
      <div className='w-1/2 mx-4'>
        <h3 className='text-xl font-bold mb-2'>2. FUNCTIONS</h3>
        <div className='text-lg text-center text-white'>
          <div className='h-full'>
            <p className='my-4 p-8 bg-blue rounded-xl'>
              The Dashboard function allows administrators to have general
              information about the system.
            </p>
            <p className='my-4 p-8 border bg-blue rounded-xl'>
              The alerts management function related to behavioral attack
              detection and prevention.
            </p>
            <p className='my-4 p-8 border bg-blue rounded-xl'>
              The report generation function allows the administrator to create
              customized reports according to specific conditions.
            </p>
            <p className='my-4 p-8 border bg-blue rounded-xl'>
              System configuration management.
            </p>
          </div>
          <div>
            <h3 className='text-xl font-bold text-darkBlue'>
              SYSTEM MANAGEMENT
            </h3>
          </div>
          <div>
            <p className='my-4 p-8 border bg-blue rounded-xl'>
              Managing system administrator accounts.
            </p>
            <p className='my-4 p-8 border bg-blue rounded-xl'>
              Managing system software updates from the Cloud.
            </p>
            <p className='my-4 p-8 border bg-blue rounded-xl'>
              System status information.
            </p>
            <p className='my-4 p-8 border bg-blue rounded-xl'>
              Managing logs operating on the system.
            </p>
            <p className='my-4 p-8 border bg-blue rounded-xl'>
              System management via Console và SSH.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Function2;
