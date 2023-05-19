import React from 'react';

function System() {
  return (
    <div className='rounded-xl bg-blue text-white p-8 my-4 mx-8'>
      <h3 className='text-xl font-bold mb-2'>
        7. SYSTEM ADMINISTRATION FUNCTION
      </h3>
      <div className='flex justify-between text-lg text-center'>
        <div className='w-1/2 h-full'>
          <p className='m-4 p-4 border border-white rounded-xl'>
            DASHBOARD FUNCTION ALLOWS ADMINISTRATORS TO HAVE GENERAL INFORMATION
            ABOUT THE SYSTEM.
          </p>
          <p className='m-4 p-4 border border-white rounded-xl'>
            BEHAVIOR BLOCKING FUNCTION ENABLES MANAGEMENT OF BEHAVIORAL ATTACK
            DETECTION AND PREVENTION ALERTS.
          </p>
          <p className='m-4 p-4 border border-white rounded-xl'>
            REPORT GENERATION FUNCTION ALLOWS ADMINISTRATORS TO CREATE
            CUSTOMIZED REPORTS ACCORDING TO SPECIFIC CONDITIONS IN DIFFERENT
            FORMATS.
          </p>
        </div>
        <div className='w-1/2'>
          <p className='m-4 p-4 border border-white rounded-xl'>
            MANAGING SYSTEM ADMINISTRATOR ACCOUNTS.
          </p>
          <p className='m-4 p-4 border border-white rounded-xl'>
            MANAGING SYSTEM SOFTWARE UPDATES FROM THE CLOUD.
          </p>
          <p className='m-4 p-4 border border-white rounded-xl'>
            SYSTEM STATUS INFORMATION.
          </p>
          <p className='m-4 p-4 border border-white rounded-xl'>
            MANAGING LOGS OPERATING ON THE SYSTEM.
          </p>
          <p className='m-4 p-4 border border-white rounded-xl'>
            SYSTEM MANAGEMENT VIA CONSOLE VÀ SSH.
          </p>
        </div>
      </div>
    </div>
  );
}

export default System;
