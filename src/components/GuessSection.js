import React from 'react';

import Feedback from './feedback';
import GuessForm from './guess-form';

export default function GuessSection() {
  return (
    <section>
      <Feedback />
      <GuessForm />
    </section>
  )
}