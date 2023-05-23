import React from 'react';
import deploymentImg from '../../../images/solutions/v2-edr-4.ba484ce56ada73f54a8b.png';
import LazyLoad from 'react-lazyload';
function Deployment() {
  const deployment = [
    {
      content: 'Windows 11; Windows 10',
    },
    {
      content: 'Windows Server 2008 R2',
    },
    {
      content: 'Windows Server 2012 R2',
    },
    {
      content: 'Windows Server 2016',
    },
    {
      content: 'Windows Server 2019',
    },
    {
      content: 'CentOS 7.x; CentOS 8.x',
    },
    {
      content: 'Debian 10; Debian 11',
    },
  ];
  const contentDeployment = deployment.map((content, index) => {
    return (
      <div className='m-4 flex items-center' key={index}>
        <div className='w-16 h-4 bg-blue rounded-r-2xl text-blue mr-2'></div>
        <h4 className='font-semibold'>{content.content}</h4>
      </div>
    );
  });
  return (
    <div className='py-8 px-4 md:px-16 Right'>
      <h3 className='text-xl md:text-2xl font-bold'>4. DEPLOYMENT SUPPORT</h3>
      <div className='flex'>
        <div className='w-2/3 md:w-2/3 lg:w-1/3 text-lg md:text-xl text-sm md:px-8 md:py-4'>
          {contentDeployment}
        </div>
        <LazyLoad
          className='w-1/3 md:w-1/3 lg:w-1/2  lg:p-4 lg:m-4 m-auto'
          offset={100}
          once
        >
          <img
            className=' md:h-4/5 m-auto'
            src={deploymentImg}
            alt={deploymentImg}
          />
        </LazyLoad>
      </div>
    </div>
  );
}

export default Deployment;
