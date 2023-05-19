import React from 'react';
import LazyLoad from 'react-lazyload';
import solutionImg from '../../../images/solutions/v2-edr-1.d84249ea80b417e86620.png';
function MultiTask() {
  const terminal = [
    {
      content:
        'Centralized system information management (Hostname, IP, MAC, Hostfix,...).',
    },
    {
      content:
        'Centralized system information management (Hostname, IP, MAC, Hostfix,...).',
    },
    {
      content:
        'Information security event management on a centralized cross-platform endpoint.',
    },
    {
      content: 'Managing security policy enforcement on endpoints.',
    },
  ];
  const behavioral = [
    {
      content:
        'Detecting network attack, endpoint anomalous behavior based on behavior analysis from system logs.',
    },
    {
      content:
        'Automatically warning, handling and isolating endpoints detected with abnormal behavior.',
    },
    {
      content:
        'Allowance of definition and creation of rules for behavior analysis, enabling correlation analysis to detect APT attacks.',
    },
  ];
  const malware = [
    {
      content:
        'Detecting malicious attacks on endpoints connected to C&C Server.',
    },
    {
      content:
        'Detecting malicious code attack on malicious domain query endpoint.',
    },
    {
      content: 'Detecting malicious attacks on endpoints running malware.',
    },
    {
      content: 'Detecting malicious attacks on endpoints using Yara Rules.',
    },
    {
      content:
        'Detecting malicious attacks on endpoints using the knowledge from the TIP system.',
    },
  ];
  const information = [
    {
      content:
        'Tracing, investigating, analyzing events and information security incidents on endpoints.',
    },
    {
      content: 'Process management on endpoint.',
    },
    {
      content: 'Network connection management on endpoint.',
    },
    {
      content:
        'Managing processes, system programs that automatically run with the system.',
    },
    {
      content: 'Managing information of service ports on endpoints.',
    },
    {
      content: 'Managing system login information on endpoint.',
    },
    {
      content: 'Managing access information, download data on endpoint.',
    },
    {
      content:
        'Download files to EDR server; Analyze, scan for malware, and upload information on Sandbox.',
    },
  ];
  const contentTerminal = terminal.map((content, index) => {
    return (
      <p className='my-2' key={index}>
        {content.content}
      </p>
    );
  });
  const contentBehavioral = behavioral.map((content, index) => {
    return (
      <p className='my-2' key={index}>
        {content.content}
      </p>
    );
  });
  const contentMalware = malware.map((content, index) => {
    return (
      <p className='my-2' key={index}>
        {content.content}
      </p>
    );
  });
  const contentInformation = information.map((content, index) => {
    return (
      <p className='my-2' key={index}>
        {content.content}
      </p>
    );
  });
  return (
    <div className='px-8 pt-8'>
      <div className='relative'>
        <h3 className='text-xl font-bold mb-2 md:mx-12'>
          1. MULTI-TASKING MANAGEMENT FUNCTIONS
        </h3>
        <LazyLoad
          className='absolute z-50 w-full h-full top-0 left-0 m-auto flex justify-center items-center'
          offset={100}
          once
        >
          <img className='lg:h-full' src={solutionImg} alt={solutionImg} />
        </LazyLoad>
        <div className='flex flex-wrap justify-between items-stretch'>
          <div className='w-1/3 md:w-2/5 text-lg border border-darkBlue rounded-xl p-4 md:mx-12 m-2 mb-8'>
            <h4 className='font-semibold text-center'>
              TERMINAL MANAGEMENT FUNCTION
            </h4>
            <div>{contentTerminal}</div>
          </div>
          <div className='w-1/3 md:w-2/5 text-lg border border-darkBlue rounded-xl p-4 md:mx-12 m-2 mb-8'>
            <h4 className='font-semibold text-center'>
              BEHAVIORAL NETWORK ATTACK DETECTION
            </h4>
            <div>{contentBehavioral}</div>
          </div>
          <div className='w-1/3 md:w-2/5 text-lg border border-darkBlue rounded-xl p-4 md:m-12 m-2'>
            <h4 className='font-semibold text-center'>
              MALWARE DETECTION FUNCTION ACCORDING TO IDENTIFICATION SIGNS
            </h4>
            <div>{contentMalware}</div>
          </div>
          <div className='w-1/3 md:w-2/5 text-lg border border-darkBlue rounded-xl p-4 md:m-12 m-2'>
            <h4 className='font-semibold text-center'>
              INFORMATION SECURITY INCIDENT RESPONSE FUNCTION
            </h4>
            <div>{contentInformation}</div>
          </div>
        </div>
      </div>
      <div className='text-lg p-8 mx-4'>
        <p>
          Information security incident detection and response solutions on
          V2-EDR terminals allow management, monitoring, detection of attacks,
          malware and response mechanisms to protect the server, workstations
          and terminals. The detection of network attacks, malicious code and
          processing and response functions are done centrally through Agents
          installed on servers and workstations.
        </p>
      </div>
    </div>
  );
}

export default MultiTask;
