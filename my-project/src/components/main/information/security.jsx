import React from 'react';
import LazyLoad from 'react-lazyload';
import guard from '../../../images/information/guardblack.png';
function Security() {
  const security = [
    {
      content: 'Automatic warning of attacks via SMS, Email, ...',
    },
    {
      content:
        'The system provides interoperability with network devices (Router Cisco - Juniper, Firewall Cisco PIX - ASA, Firewall, Check-Point, Firewall Forgtinet,...), Security devices (Firewall, NAC, IDS, IPS) and operating systems (Windows Server, Linux, Centos, Fedora, Ubuntu, Debian, Linux, Transparent Firewall,...) to conduct network attack prevention.',
    },
    {
      content:
        'This ability allows the systems to prevent network attacks without affecting the operation and performance of the systems; and does not require the installation of Agents on devices or servers.',
    },
  ];
  const contentSecurity = security.map((content, index) => {
    return (
      <div key={index} className='flex my-2'>
        <LazyLoad className='w-4 mt-2 mr-4' offset={100} once>
          <img src={guard} alt={guard} />
        </LazyLoad>
        <p className='w-full'>{content.content}</p>
      </div>
    );
  });
  return (
    <div className='text-darkBlue'>
      <h3 className='text-xl font-bold px-3'>
        6. SECURITY ALERTS AND AUTOMATICALLY PREVENT ATTACKS
      </h3>
      <div className='text-lg px-3 py-4'>{contentSecurity}</div>
    </div>
  );
}

export default Security;
