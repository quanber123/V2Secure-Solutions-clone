import React from 'react';

function Processing() {
  const processing = [
    {
      content:
        'Allowance of establishing rules to automatically conduct correlation analysis of various log sources to detect network attacks.',
    },
    {
      content:
        'Abnormal behavior detection to accurately detect the target and being attacked based on the ability to automatically analyze the alerts received from the system.',
    },
    {
      content:
        'Administrator permissions to generate a set of rules to detect anomalous user behavior and abnormal network connections on the system.',
    },
    {
      content: 'Setting up available rules to detect the following behaviors:',
    },
  ];
  const contentProcessing = processing.map((content, index) => {
    return (
      <p className='m-4' key={index}>
        <i className='fa fa-hand-o-right mr-4'></i>
        {content.content}
      </p>
    );
  });
  return (
    <div className='md:w-2/5'>
      <h3 className='text-center text-white text-xl font-bold'>
        3. PROCESSING CORRELATION ANALYSIS
      </h3>
      <div className='text-white text-lg'>
        <div className='px-4'>{contentProcessing}</div>
        <ul>
          <li className='px-12'>- Hacker's networking scanning behavior.</li>
          <li className='px-12'>
            - Attack behavior from a source address when conducting different
            type of network attacks to the protected system.
          </li>
          <li className='px-12'>- Web application attack behavior.</li>
          <li className='px-12'>
            - Network attack by using malicious code, malware.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Processing;
