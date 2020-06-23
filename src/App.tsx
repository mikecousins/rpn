import React, { useState } from 'react';
import Calculator from './components/Calculator';
import Buttons from './components/Buttons';
import Display from './components/Display';

export type RpnBuffer = {
  numbers: number[];
  input: string;
}

function App() {
  const [buffer, setBuffer] = useState<RpnBuffer>({ numbers: [], input: '' });

  return (
    <Calculator>
      <Display buffer={buffer} />
      <Buttons buffer={buffer} setBuffer={setBuffer} />
    </Calculator>
  );
}

export default App;
