import React from 'react';
import LazyLoad from 'react-lazyload';
import processingImg from '../../../images/application/v2-waf-4.c7d6d85b14a77edd59fc.png';
function Processing() {
  const processing = [
    {
      content:
        'Allowance of establishing a set of rules to automatically conduct correlation analysis of various log sources to detect network attacks.',
    },
    {
      content:
        'Abnormal behavior detection to accurately detect the target and being attacked based on the ability to automatically analyze the alerts received from the system.',
    },
    {
      content:
        'Administrator permissions to generate a set of rules to detect anomalous user behavior and abnormal network connections on the system.',
    },
  ];
  const contentProcessing = processing.map((content, index) => {
    return (
      <p className='m-4' key={index}>
        {content.content}
      </p>
    );
  });
  return (
    <div className='text-darkBlue'>
      <h3 className='text-xl font-bold px-3 mx-4'>
        4. PROCESSING CORRELATION ANALYSIS
      </h3>
      <div className='text-lg px-3 py-4'>{contentProcessing}</div>
      <LazyLoad
        className='flex items-center justify-center w-full p-4'
        offset={100}
        once
      >
        <img className='w-full' src={processingImg} alt={processingImg} />
      </LazyLoad>
    </div>
  );
}

export default Processing;
