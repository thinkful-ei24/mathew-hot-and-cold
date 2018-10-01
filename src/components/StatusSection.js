import React from 'react';

import GuessList from './guess-list';
import GuessCount from './guess-count';
import AuralStatus from './aural-status';

export default function StatusSection() {
  return (
    <section>
      <GuessCount />
      <GuessList />
      <AuralStatus />
    </section>
  )
}