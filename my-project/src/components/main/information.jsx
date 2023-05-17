import React from 'react';
import Collections from './information/collections';
import Network from './information/network';
function Information() {
  return (
    <section className='bg-white text-darkBlue container m-auto rounded-2xl'>
      <h1 className='underline text-center text-2xl font-bold pt-8 px-4'>
        CENTRALIZED INFORMATION SECURITY MONITORING MANAGEMENT SYSTEM V2 - SIEM
      </h1>
      <Collections />
      <Network />
    </section>
  );
}

export default Information;
