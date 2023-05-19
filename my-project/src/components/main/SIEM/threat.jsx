import React from 'react';

function Threat() {
  const threat = [
    {
      content: 'Integrated threat intelligence function.',
    },
    {
      content: 'Update threat intelligence data from the Cloud.',
    },
    {
      content:
        'Automatically update blacklist (IP, DOMAIN, HASH) for SIEM from threat intelligence data.',
    },
    {
      content:
        'Allowance of sharing information with threat intelligence systems.',
    },
  ];
  const contentThreat = threat.map((content, index) => {
    return (
      <p className='m-4' key={index}>
        <i className='fa fa-hand-o-right mr-4'></i>
        {content.content}
      </p>
    );
  });
  return (
    <div>
      <h3 className='text-center text-white text-xl font-bold'>
        4. THREAT INTELLIGENCE INTEGRATION
      </h3>
      <div className='text-white text-lg'>{contentThreat}</div>
    </div>
  );
}

export default Threat;
