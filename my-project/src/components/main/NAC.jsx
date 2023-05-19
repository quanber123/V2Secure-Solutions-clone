import React from 'react';
import LazyLoad from 'react-lazyload';
import accessImg from '../../images/access/v2-nac-1.46f479e902710bf3fbb5.png';
import Function1 from './NAC/function-1';
import Function2 from './NAC/function-2';
function NAC() {
  return (
    <section className='container m-auto bg-white text-darkBlue rounded-2xl my-12'>
      <h1 className='underline text-center text-2xl font-bold pt-8 px-4'>
        NETWORK ACCESS CONTROL SYSTEM V2-NAC
      </h1>
      <LazyLoad
        className='flex justify-center items-center m-8'
        offset={100}
        once
      >
        <img className='w-4/5 h-full' src={accessImg} alt={accessImg} />
      </LazyLoad>
      <Function1 />
      <Function2 />
    </section>
  );
}

export default NAC;
