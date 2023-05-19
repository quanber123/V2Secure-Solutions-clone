import React from 'react';

function Security() {
  const security = [
    {
      content: 'FILTERING PACKETS BY BLACKLIST.',
    },
    {
      content: 'IP ADDRESS FILTERING.',
    },
    {
      content: 'IP ADDRESS CLASSIFICATION BY GEOGRAPHIC COORDINATES.',
    },
    {
      content: "APPLY OWASP'S TOP 10.",
    },
    {
      content: 'CSS ATTACK PREVENTION.',
    },
    {
      content: 'CSRF ATTACK PREVENTION.',
    },
    {
      content: 'SESSION HIJACKING ATTACK PREVENTION.',
    },
    {
      content: 'BUILT-IN VULNERABILITY SCANNING FEATURE.',
    },
    {
      content: 'MALWARE DETECTION.',
    },
    {
      content: 'VIRTUAL PATCHING.',
    },
    {
      content: 'BRUTEFORCE ATTACK PREVENTION.',
    },
    {
      content: 'SQLI ATTACK DETECTION.',
    },
    {
      content: 'STATEFUL FIREWALL INTEGRATION AT LAYER 4.',
    },
    {
      content: 'DOS ATTACK PREVENTION.',
    },
    {
      content: 'DEFACE ATTACK PREVENTION.',
    },
  ];
  const contentSecurity = security.map((content, index) => {
    return (
      <p className='my-8 mx-4 text-lg' key={index}>
        <i className='fa fa-star mr-4 text-sm'></i>
        {content.content}
      </p>
    );
  });
  return (
    <div className='h-full bg-blue text-white rounded-tr-2xl p-8'>
      <h3 className='text-xl font-bold pl-3'>3. WEB APPLICATION SECURITY</h3>
      <div className='text-lg'>{contentSecurity}</div>
    </div>
  );
}

export default Security;
