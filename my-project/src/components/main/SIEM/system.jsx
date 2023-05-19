import React from 'react';
import LazyLoad from 'react-lazyload';
import systemImg from '../../../images/information/v2-siem-8.ba484ce56ada73f54a8b.png';
function System() {
  const system = [
    {
      content:
        'The Dashboard function allows administrators to have general information about the system.',
    },
    {
      content:
        'The Event Map function allows real-time visualization of network attacks.',
    },
    {
      content:
        'The report generation function allows administrators to create customized reports according to specific conditions in different formats.',
    },
    {
      content: 'System configuration management.',
    },
    {
      content: 'Managing system administrator accounts.',
    },
    {
      content: 'Managing system software updates from the Cloud.',
    },
    {
      content: 'System status information.',
    },
    {
      content: 'Managing logs operating on the system.',
    },
    {
      content: 'System management via Console và SSH',
    },
  ];
  const contentSystem = system.map((content, index) => {
    return (
      <p className='my-4' key={index}>
        {content.content}
      </p>
    );
  });
  return (
    <div className='ml-auto w-11/12 rounded-tl-2xl p-8 bg-blue'>
      <h3 className='px-3 text-white text-xl font-bold'>
        8. SYSTEM ADMINISTRATION FUNCTION
      </h3>
      <div className='flex flex-col md:flex-grow items-center'>
        <div className='md:w-2/3 text-white text-lg px-3 py-4'>
          {contentSystem}
        </div>
        <LazyLoad className='md:w-1/3 h-full' offset={100} once>
          <img className='w-full' src={systemImg} alt={systemImg} />
        </LazyLoad>
      </div>
    </div>
  );
}

export default System;
