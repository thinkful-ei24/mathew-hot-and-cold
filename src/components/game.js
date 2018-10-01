import React from 'react';

// import Nav from './Nav';
// import MakeGuessText from './Makeguesstext';
// import GuessBox from './GuessBox';
// import Guesshistory from './Guesshistory';
import Header from './header';
import GuessSection from './GuessSection'
import StatusSection from './StatusSection'
import InfoSection from './info-section'

export default function Container() {
  return (
    <div>
      <Header />
      {/* <Banner /> */}
      <main role="main">
        <GuessSection /> {/* My version: <MakeGuessText />  */}
        <StatusSection /> {/* My version: <GuessBox /> */}
        <InfoSection /> {/* <Guesshistory /> */}
      </main>
      
    </div>
  )
}