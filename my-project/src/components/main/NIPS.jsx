import React from 'react';
import Networking from './NIPS/networking';
import Cyber from './NIPS/cyber';
import System from './NIPS/system';
function NIPS() {
  return (
    <section
      id='nips'
      className='container m-auto bg-white text-darkBlue rounded-2xl my-12'
    >
      <h1 className='underline text-center text-2xl font-bold pt-8 px-4 mb-3'>
        THE NEW GENERATION NETWORK ATTACK PREVENTION SYSTEM V2 - NIPS
      </h1>
      <Networking />
      <Cyber />
      <System />
    </section>
  );
}

export default NIPS;
