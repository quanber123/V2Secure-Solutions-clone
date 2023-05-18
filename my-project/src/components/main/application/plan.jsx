import React from 'react';
import LazyLoad from 'react-lazyload';
import planImg from '../../../images/application/v2-waf-2.9e1733d2be88b2a28b46.png';
function Plan() {
  const plan = [
    {
      content: 'Implemented as a reverse proxy.',
    },
    {
      content: 'Implemented as transparent proxy.',
    },
    {
      content: 'Implemented offline tracking mechanism (offline sniffing).',
    },
    {
      content: 'Implemented with Web Cache Communication Protocal (WCCP).',
    },
  ];
  const contentPlan = plan.map((content, index) => {
    return (
      <p className='m-4' key={index}>
        <i className='fa fa-circle mr-4 text-sm text-blue'></i>
        {content.content}
      </p>
    );
  });
  return (
    <div className='text-darkBlue'>
      <h3 className='text-xl font-bold px-3 mx-4'>2. IMPLEMENTATION PLAN</h3>
      <div className='text-lg px-3 py-4'>{contentPlan}</div>
      <LazyLoad
        className='flex items-center justify-center w-full p-4'
        offset={100}
        once
      >
        <img className='w-full' src={planImg} alt={planImg} />
      </LazyLoad>
    </div>
  );
}

export default Plan;
