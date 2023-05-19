import React from 'react';
import SIEM from './main/SIEM';
import WAF from './main/WAF';
import NIPS from './main/NIPS';
import EDR from './main/EDR';
import NAC from './main/NAC';
import Gallery from './main/gallery';
import Contact from './main/contact';
function Main() {
  return (
    <main>
      <SIEM />
      <WAF />
      <NIPS />
      <EDR />
      <NAC />
      <Gallery />
      <Contact />
    </main>
  );
}

export default Main;
