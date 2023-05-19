import React from 'react';
import LazyLoad from 'react-lazyload';
import logImg from '../../../images/information/v2-siem-1.34657cc7dee593f2419b.png';
function Collections() {
  const collecting = [
    {
      id: 1,
      content:
        'Network devices, security devices: Router, Switch, Firewall/IPS/IDS, Sandbox WAF, Network APT.',
    },
    {
      id: 2,
      content: 'System servers on different platforms: Windows, Linux, Unix.',
    },
    {
      id: 3,
      content:
        'Applications serving the operation of the system: DHCP, DNS, NTP, VPN, Proxy Server,...; Application service providers: Web, Mail, FPT, TFTP and database management systems Oracle, SQL, IP Camera.',
    },
    {
      id: 4,
      content:
        'Terminal devices: User computer, printer, fax machine, IP Phone, IP Camera.',
    },
    {
      id: 5,
      content:
        "Monitoring on the transmission line: Edge monitoring point at the edge router's connection interface to external networks; monitoring point creating each network area of the system.",
    },
  ];
  const automatic = [
    {
      id: 1,
      content:
        'Automatically normalize log data received from devices and applications.',
    },
    {
      id: 2,
      content: ' Automatically update new log formats from Cloud',
    },
  ];
  const contentCollecting = collecting.map((content, index) => {
    return (
      <p key={index}>
        ({index + 1}) {content.content}
      </p>
    );
  });
  const contentAutomatic = automatic.map((content, index) => {
    return (
      <p key={index}>
        ({index + 1}) {content.content}
      </p>
    );
  });
  return (
    <div className='p-8'>
      <h3 className='text-center text-xl font-bold'>
        1. REAL-TIME LOG COLLECTION AND MANAGEMENT
      </h3>
      <div className='p-8 flex justify-between'>
        <div className='w-2/3'>
          <h4 className='font-bold text-xl'>
            <i className='fa fa-stop -ml-2 mr-2'></i>1.1. Collecting logs from
            different souces:
          </h4>
          <div className='border-l-2  pl-4 pb-4 text-lg'>
            {contentCollecting}
          </div>
          <h4 className='font-bold text-xl'>
            <i className='fa fa-stop -ml-2 mr-2'></i>1.2. Automatic log
            normalization:
          </h4>
          <div className='pl-4 text-lg'>{contentAutomatic}</div>
        </div>
        <LazyLoad className='w-1/3' offset={100} once>
          <img className='w-full h-full' src={logImg} alt={logImg} />
        </LazyLoad>
      </div>
    </div>
  );
}

export default Collections;
