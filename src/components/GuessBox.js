import React from 'react';

export default function GuessBox() {
  return (
    <section className="guess-box">
      <input placeholder="Enter Your Guess" /> <br />
      <button>Guess</button>
      <p>Guess #0!</p>
    </section>
  )
}