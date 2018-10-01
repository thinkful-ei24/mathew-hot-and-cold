//They called this top-nav.js and used <nav> where I used <section>

import React from 'react';

import './top-nav.css';

export default function Nav() {
  return (
    <nav> 
      {/* <section> */}
      <ul className="clearfix"> {/* They used a clearfix here */}
        <li>WHAT?</li>
        <li>+ NEW GAME</li>
      </ul>
    </nav>
  )
}