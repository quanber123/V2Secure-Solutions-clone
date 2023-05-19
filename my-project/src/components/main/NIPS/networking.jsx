import React from 'react';
import LazyLoad from 'react-lazyload';
import systemImg from '../../../images/generation/v2-nips-1-3.3a965cfbc9f043c3bedb.png';
function Networking() {
  const detectionSignatures = [
    {
      content:
        'The system has ability to analyze the network connection to detect network attacks without affecting the operation of the protected system.',
    },
    {
      content:
        'Detecting abnormal activities on the system based on the attack detection signature set.',
    },
    {
      content: 'Types of network attack that target users inside the system.',
    },
    {
      content: 'Denial of service attack (Dos/DDoS).',
    },
    {
      content: 'Attack that violates system policy.',
    },
    {
      content: 'Anomalous network connection detected on the system.',
    },
    {
      content: 'Network attack using Shellcode.',
    },
    {
      content:
        'Detecting malicious software activities over the network environment.',
    },
    {
      content: 'Network-scan attack.',
    },
    {
      content: 'Attacks on operating systems (Linux, Windows,..).',
    },
    {
      content: 'Attacks on Web server (IIS, Apache, Oracle,...)',
    },
    {
      content: 'Attacks on the Database server (Mssql, Mysql, Oracle,...)',
    },
    {
      content: 'Attacks on the Email server (POP3, IMAP, SMTP,...)',
    },
    {
      content:
        'Attacks on Web Application (SQL/XSS/Command Line Injection, HTTP detour attack, Inclusion Vulnerabili-ties, Brute Force,...)',
    },
  ];
  const anomalousActivity = [
    {
      content:
        'The Behavior Detection function allows detections of anomalous behavior to accurately detect attackers and attacked objects based on the ability to automatically analyze warnings received from the system.',
    },
    {
      content:
        'The Behavior Detection function allows administrators to establish a set of rules in order to detect anomalous user behavior and abnormal network connections on the system.',
    },
    {
      content:
        'The Behavior Detection function is set up with available rule sets to detect the following behaviors:',
    },
  ];
  const contentDetectionSignatures = detectionSignatures.map(
    (content, index) => {
      return (
        <p className='mx-4 my-2' key={index}>
          {content.content}
        </p>
      );
    }
  );
  const contentAnomalousActivity = anomalousActivity.map((content, index) => {
    return (
      <p className='mx-4 my-2' key={index}>
        {content.content}
      </p>
    );
  });
  return (
    <div className='mx-8 px-3 py-4 border-b-2 border-l-2 border-r-2 border-blue rounded-b-xl'>
      <h3 className='text-xl font-bold px-3'>1. Networking attack detection</h3>
      <div>
        <h3 className='text-xl font-bold px-3 my-2'>
          1.1. Detecting network attacks based on a set of attack detection
          signatures
        </h3>
        <div className='text-lg'>{contentDetectionSignatures}</div>
      </div>
      <div>
        <h3 className='text-xl font-bold px-3 my-2'>
          1.2. Detecting network attacks based on anomalous activity on the
          system
        </h3>
        <div className='text-lg'>
          {contentAnomalousActivity}
          <ul className='px-6'>
            <li>- Hacker's networking scanning behavior.</li>
            <li>
              - Attack behavior from a source address when conducting different
              type of network attacks to the protected system.
            </li>
            <li>- Web application attack behavior.</li>
            <li>- Network attack by using malicious code, malware.</li>
          </ul>
        </div>
      </div>
      <div>
        <h3 className='text-xl font-bold px-3 my-2'>
          1.3. Detecting malicious behavior based on system anomalous network
          connection
        </h3>
        <LazyLoad className='flex justify-center my-4' offset={100} once>
          <img src={systemImg} alt={systemImg} />
        </LazyLoad>
      </div>
    </div>
  );
}

export default Networking;
