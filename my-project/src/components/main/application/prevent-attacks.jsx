import React from 'react';

function PreventAttacks() {
  const preventAttacks = [
    {
      content: 'Automatic warning of attacks via SMS, Email,...',
    },
    {
      content:
        'The system provides interoperability with network devices (Router Cisco - Juniper, Firewall Cisco PIX - ASA, Firewall Check-Point, Firewall Fortigate,..), Security devices (Firewall, NAC, IDS, IPS) and operating systems (Windows Server, Linux Centos, Fedora, Ubuntu, Debian, Linux Transparent Firewall,...) to conduct network attack prevention.',
    },
    {
      content:
        'This ability allows the systems to prevent network attacks without affecting the operation and performance of the systems; and does not require the installation of Agents on devices or servers.',
    },
  ];
  const contentPreventAttacks = preventAttacks.map((content, index) => {
    return (
      <p className='m-4' key={index}>
        {content.content}
      </p>
    );
  });
  return (
    <div className='text-darkBlue'>
      <h3 className='text-xl font-bold px-3 mx-4'>
        5. SECURITY ALERTS AND AUTOMATICALLY PREVENT ATTACKS
      </h3>
      <div className='text-lg px-3 py-4'>{contentPreventAttacks}</div>
    </div>
  );
}

export default PreventAttacks;
