import React from 'react';
import { useTranslation } from 'react-i18next';
function IncidentAnalysis() {
  const { t } = useTranslation();
  const incidentAnalysis = [
    {
      content: t('WAF.content25'),
    },
    {
      content: t('WAF.content26'),
    },
    {
      content: t('WAF.content27'),
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
    <div className='Left'>
      <h3 className='text-xl font-bold lg:px-3 lg:mx-4'>
        6. INCIDENT INVESTIGATION AND ANALYSIS
      </h3>
      <div className='text-lg lg:px-3 lg:py-4'>{contentIncidentAnalysis}</div>
    </div>
  );
}

export default IncidentAnalysis;
