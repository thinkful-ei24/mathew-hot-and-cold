import React from 'react';

import Nav from './Nav';
// import MakeGuessText from './Makeguesstext';
import GuessSection from './GuessSection'
// import GuessBox from './GuessBox';
import StatusSection from './StatusSection'
// import Guesshistory from './Guesshistory';
import InfoSection from './InfoSection'

export default function Container() {
  return (
    <div className="container">
      <Nav />
      {/* <Banner /> */}
      <main role="main">
        <GuessSection /> {/* My version: <MakeGuessText />  */}
        <StatusSection /> {/* My version: <GuessBox /> */}
        <InfoSection /> {/* <Guesshistory /> */}
      </main>
      
    </div>
  )
}