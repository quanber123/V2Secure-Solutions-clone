import React from 'react';
function IncidentAnalysis() {
  const incidentAnalysis = [
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
  const contentIncidentAnalysis = incidentAnalysis.map((content, index) => {
    return (
      <p className='m-4' key={index}>
        <i className='fa fa-circle mr-4 text-sm text-blue'></i>
        {content.content}
      </p>
    );
  });
  return (
    <div>
      <h3 className='text-xl font-bold lg:px-3 lg:mx-4'>
        6. INCIDENT INVESTIGATION AND ANALYSIS
      </h3>
      <div className='text-lg lg:px-3 lg:py-4'>{contentIncidentAnalysis}</div>
    </div>
  );
}

export default IncidentAnalysis;
