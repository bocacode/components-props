import React from 'react';
import Greet from './Greet';

function Main() {
  return (
    <main>
      <Greet firstName="Wade" lastName="Booth" />
      <Greet firstName="Alex" />
      <Greet firstName="Maria" />
      <Greet firstName="Arthur" />
      <Greet firstName="Chole" />
    </main>
  )
}

export default Main;