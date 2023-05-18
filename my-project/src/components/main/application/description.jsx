import React from 'react';
import wafImg from '../../../images/application/v2-waf-1.6c6e603ebe6c82ee7b59.png';
import LazyLoad from 'react-lazyload';
function Description() {
  return (
    <div className='p-8'>
      <h3 className='text-xl font-bold my-2'>1. FUNCTION DESCRIPTION</h3>
      <p className='leading-7 text-lg'>
        Web Application Firewall is a solution to protect applications against
        cyber attacks. WAF is a hardware or software device installed on a
        server that monitors information by using the http/https protocol
        between a user's browser and a web server. WAF enforces security
        policies based on attack signatures, standard protocols, and anomalous
        web application traffic.
      </p>
      <LazyLoad
        className='flex items-center justify-center p-4'
        offset={100}
        once
      >
        <img src={wafImg} alt={wafImg} />
      </LazyLoad>
    </div>
  );
}

export default Description;
