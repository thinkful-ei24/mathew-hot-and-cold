//They called this top-nav.js and used <nav> where I used <section>

import React from 'react';

import './nav.css';

export default function Nav() {
  return (
    <nav> 
      {/* <section> */}
      <ul className="clearfix"> {/* They used a clearfix here */}
        <li>WHAT?</li>
        <li>+ NEW GAME</li>
      </ul>

      {/* I did not have this here, it was in a different component */}
      <h1>HOT or COLD</h1> 
      {/* </section */}
    </nav>
  )
}