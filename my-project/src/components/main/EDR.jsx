import React from 'react';
import MultiTask from './EDR/multi-task';
import Incident from './EDR/incident';
import System from './EDR/system';
import Deployment from './EDR/deployment';
function EDR() {
  return (
    <section
      id='edr'
      className='container m-auto bg-white text-darkBlue rounded-2xl'
    >
      <h1 className='underline text-center text-2xl font-bold pt-8 px-4'>
        A SOLUTION FOR DETECTION AND RESPONSE TO INFORMATION SECURITY INCIDENTS
        ON TERMINAL DEVICES V2-EDR
      </h1>
      <MultiTask />
      <Incident />
      <System />
      <Deployment />
    </section>
  );
}

export default EDR;
