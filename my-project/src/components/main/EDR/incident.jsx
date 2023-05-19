import React from 'react';
import LazyLoad from 'react-lazyload';
import incidentImg from '../../../images/solutions/v2-edr-2.ee17e416a2b05aad6ef4.png';
function Incident() {
  const incident = [
    {
      content: 'Allowance of in-depth log analysis for each information field.',
    },
    {
      content:
        'Allowance of creation correlation rules to detect and investigate attacks and incidents.',
    },
    {
      content:
        'Allowance of incident analysis and investigation through an intuitive interface.',
    },
  ];
  const contentIncident = incident.map((content, index) => {
    return (
      <p key={index}>
        <i className='fa fa-circle mr-4 text-sm text-blue'></i>
        {content.content}
      </p>
    );
  });
  return (
    <div className='px-8 pt-8'>
      <h3 className='text-xl font-bold px-3 mx-4'>
        2. INCIDENT INVESTIGATION AND ANALYSIS
      </h3>
      <div className='text-lg px-8 py-4'>{contentIncident}</div>
      <LazyLoad className='flex justify-center items-center' offset={100} once>
        <img className='h-4/5' src={incidentImg} alt={incidentImg} />
      </LazyLoad>
    </div>
  );
}

export default Incident;
