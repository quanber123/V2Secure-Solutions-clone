import React from 'react';

function Function1() {
  const function1 = [
    {
      content:
        'SYSTEM POLICY OF INTERACTION MECHANISM WITH NETWORK DEVICES (ROUTER, SWITCH), SECURITY DEVICE (FIREWALL) AND OPERATING SYSTEM (WINDOWS, LINUX,...) TO MANAGE ACCESS.',
    },
    {
      content:
        'THE FUNCTION OF AUTOMATICALLY LEARNING NETWORK DEVICE COMPONENTS IN THE SYSTEM.',
    },
    {
      content:
        'THE FUNCTION OF AUTOMATICALLY PROVIDING NETWORK CONNECTION INFORMATION BASED ON SYSTEM POLICY.',
    },
    {
      content:
        'AUTHENTICATION FUNCTION WHEN ACCESSING NETWORK AUTHENTICATION PROXY.',
    },
    {
      content:
        'CONTROLLING ACCESS VIA ACCESS CONTROL LIST (ACLS), VLAN AND TCP RESET.',
    },
    {
      content: 'NETWORK ACCESS LOGS FOR INVESTIGATION.',
    },
    {
      content:
        "MONITORING THE BEHAVIOR AND ENFORCEMENT OF THE DEVICE'S INFORMATION SECURITY POLICY.",
    },
    {
      content: 'DETECTING AND MANAGING DEVICES IN THE NETWORK.',
    },
    {
      content: 'DISPLAY OF NETWORK BLOCK NOTIFICATIONS TO USERS.',
    },
    {
      content:
        'DEVICE CLASSIFICATION DUE TO IP RANGE OR SWITCH AND DECENTRALIZATION OF ADMIN RIGHTS BY DEVICE GROUP.',
    },
    {
      content:
        'AUTOMATICALLY WHITELIST THE DEVICES BY MAC ADDRESS, DEVICE TYPE.',
    },
    {
      content: 'EXPORT POLICY VIOLATION REPORT.',
    },
    {
      content:
        'SUPPORT CENTRALIZED SWITCH CONFIGURATION: CONTROLLING PORT, CHANGING VLAN, ...',
    },
    {
      content: 'INTEGRATED SIEM CENTRALIZED MONITORING SYSTEM.',
    },
  ];
  const contentFunction1 = function1.map((content, index) => {
    return (
      <p className='my-4 mx-4 text-lg' key={index}>
        <i className='fa fa-star mr-4 text-sm'></i>
        {content.content}
      </p>
    );
  });
  return (
    <div className='h-full text-darkBlue p-8'>
      <h3 className='text-xl font-bold pl-3'>1. FUNCTIONS</h3>
      <div className='text-lg'>{contentFunction1}</div>
    </div>
  );
}

export default Function1;
