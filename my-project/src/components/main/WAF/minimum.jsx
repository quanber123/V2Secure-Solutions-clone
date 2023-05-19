import React from 'react';
import LazyLoad from 'react-lazyload';
import minimumImg from '../../../images/application/download.png';
function Minimum() {
  const minimum = [
    {
      content: 'Throughput: 200 Mbps',
    },
    {
      content: 'Backend Servers Supported: 10-25',
    },
    {
      content: 'HTTP Transactions Per Second: 30,000',
    },
    {
      content: 'HTTP Connections Per Second: 10,000',
    },
    {
      content: 'HTTPS Transactions Per Second: 12,000',
    },
    {
      content: 'Concurrent Connections: 500,000',
    },
  ];
  const contentMinimum = minimum.map((content, index) => {
    return (
      <div className='m-4 flex items-center' key={index}>
        <div className='w-16 h-4 bg-blue rounded-r-2xl text-blue mr-2'></div>
        <h4 className='font-semibold'>{content.content}</h4>
      </div>
    );
  });
  return (
    <div>
      <h3 className='text-xl font-bold p-8 mb-2 mx-8'>
        8. MINIMUM PROCESSING CAPACITY
      </h3>
      <div className='flex flex-col lg:flex-grow'>
        <div className='w-2/3 text-lg px-3 py-4'>{contentMinimum}</div>
        <LazyLoad className='lg:w-1/3 p-4 lg:m-4 m-auto' offset={100} once>
          <img className='lg:w-3/4' src={minimumImg} alt={minimumImg} />
        </LazyLoad>
      </div>
    </div>
  );
}

export default Minimum;
