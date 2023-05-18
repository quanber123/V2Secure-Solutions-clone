import React from 'react';
import LazyLoad from 'react-lazyload';
import guard from '../../../images/information/guardblack.png';
function Incident() {
  const incident = [
    {
      content: 'ALLOWANCE OF CREATION CORRELATION RULES.',
    },
    {
      content:
        'ALLOWANCE OF DETECTION AND INVESTIGATION OF ATTACKS AND INCIDENTS.',
    },
    {
      content: 'ALLOWANCE OF IN-DEPTH LOG ANALYSIS FOR EACH INFORMATION FIELD.',
    },
    {
      content:
        'ALLOWANCE OF INCIDENT ANALYSIS AND INVESTIGATION THROUGH AN INTUITIVE INTERFACE.',
    },
  ];
  const contentIncident = incident.map((content, index) => {
    return (
      <div key={index} className='flex my-2'>
        <LazyLoad className='w-4 mt-2 mr-4' offset={100} once>
          <img src={guard} alt={guard} />
        </LazyLoad>
        <p className='w-full font-semibold'>{content.content}</p>
      </div>
    );
  });
  return (
    <div className='text-darkBlue'>
      <h3 className='text-xl font-bold px-3'>
        7. INCIDENT INVESTIGATION AND ANALYSIS
      </h3>
      <div className='text-lg px-3 py-4'>{contentIncident}</div>
    </div>
  );
}

export default Incident;
