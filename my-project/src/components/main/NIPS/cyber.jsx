import React from 'react';
import LazyLoad from 'react-lazyload';
import cyberImg from '../../../images/generation/download.png';
function Cyber() {
  return (
    <div className='bg-blue text-white p-8 my-8'>
      <h3 className='text-xl font-bold my-2'>2. Handling cyber attacks</h3>
      <ul className='text-lg px-8'>
        <li>
          The system provides interoperability with network devices (Router,
          Switch), security device (Firewall) and operating systems (Windows,
          Linux,...) to conduct network attack prevention.
        </li>
        <li>
          This ability allows the systems to prevent network attacks without
          affecting the operation and performance of the systems; and does not
          require the installation of Agents on devices or servers.
        </li>
      </ul>
      <LazyLoad className='flex justify-center my-8' offset={100} once>
        <img src={cyberImg} alt={cyberImg} />
      </LazyLoad>
    </div>
  );
}

export default Cyber;
