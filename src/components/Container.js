import React from 'react';

import Nav from './Nav';
import Banner from './Banner';
import MakeGuessText from './Makeguesstext';
import GuessBox from './GuessBox';
import Guesshistory from './Guesshistory';

export default function Container() {
  return (
    <section className="container">
      <Nav />
      <Banner />
      <MakeGuessText />
      <GuessBox />
      <Guesshistory />
    </section>
  )
}