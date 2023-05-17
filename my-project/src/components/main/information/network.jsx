import React from 'react';
import LazyLoad from 'react-lazyload';
import netImg from '../../../images/information/v2-siem-2.582ebba760712039844a.jpg';
import guard from '../../../images/information/guard.png';
function Network() {
  const network = [
    {
      content:
        'Detecting network attack based on Web application access log analysis.',
    },
    {
      content: 'Detecting malicious domain queries based on DNS log analysis.',
    },
    {
      content:
        'Detecting connections to malicious IP addresses based on device and operating system connection log analysis.',
    },
    {
      content:
        'Automatic updates from the Cloud about web application attack detection, list of malicious domains and addresses.',
    },
  ];
  const contentNetwork = network.map((content, index) => {
    return (
      <div className='flex my-2'>
        <LazyLoad className='w-4 mt-2 mr-4' offset={100} once>
          <img src={guard} alt={guard} />
        </LazyLoad>
        <p className='w-full'>{content.content}</p>
      </div>
    );
  });
  return (
    <div className='ml-auto w-11/12 rounded-l-2xl p-8 bg-blue'>
      <h3 className='text-center text-white text-xl font-bold'>
        2. NETWORK ATTACK DETECTION
      </h3>
      <div className='flex flex-row-reverse'>
        <div className='w-2/3 text-white text-lg px-3 py-4'>
          {contentNetwork}
        </div>
        <LazyLoad className='w-1/3' offset={100} once>
          <img className='h-full' src={netImg} alt={netImg} />
        </LazyLoad>
      </div>
    </div>
  );
}

export default Network;
