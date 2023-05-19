import React from 'react';

function System() {
  return (
    <div className='rounded-xl p-8 my-4 mx-8'>
      <h3 className='text-xl font-bold mb-2'>
        3. SYSTEM ADMINISTRATION FUNCTION
      </h3>
      <div className='flex justify-between text-lg text-center'>
        <div className='w-1/2 h-full'>
          <p className='m-4 p-4 border border-darkBlue rounded-xl'>
            THE DASHBOARD FUNCTION ALLOWS ADMINISTRATORS TO HAVE GENERAL
            INFORMATION ABOUT THE SYSTEM.
          </p>
          <p className='m-4 p-4 border border-darkBlue rounded-xl'>
            THE BEHAVIOR BLOCKING FUNCTION ENABLES MANAGEMENT OF BEHAVIORAL
            ATTACK DETECTION AND PREVENTION ALERTS.
          </p>
          <p className='m-4 p-4 border border-darkBlue rounded-xl'>
            THE REPORT GENERATION FUNCTION ALLOWS ADMINISTRATORS TO CREATE
            CUSTOMIZED REPORTS ACCORDING TO SPECIFIC CONDITIONS IN DIFFERENT
            FORMATS.
          </p>
          <p className='m-4 p-4 border border-darkBlue rounded-xl'>
            SYSTEM CONFIGURATION MANAGEMENT
          </p>
        </div>
        <div className='flex justify-center items-center '>
          <p className='rotate-text font-bold text-xl'>
            ANALYSIS AND REPORTING
          </p>
        </div>
        <div className='w-1/2'>
          <p className='m-4 p-4 border border-darkBlue rounded-xl'>
            MANAGING SYSTEM ADMINISTRATOR ACCOUNTS
          </p>
          <p className='m-4 p-4 border border-darkBlue rounded-xl'>
            MANAGING SYSTEM SOFTWARE UPDATES FROM THE CLOUD.
          </p>
          <p className='m-4 p-4 border border-darkBlue rounded-xl'>
            SYSTEM STATUS INFORMATION.
          </p>
          <p className='m-4 p-4 border border-darkBlue rounded-xl'>
            MANAGING LOGS OPERATING ON THE SYSTEM.
          </p>
          <p className='m-4 p-4 border border-darkBlue rounded-xl'>
            SYSTEM MANAGEMENT VIA CONSOLE VÀ SSH.
          </p>
        </div>
      </div>
    </div>
  );
}

export default System;
