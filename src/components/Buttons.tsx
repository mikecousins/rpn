import React, { FunctionComponent } from 'react';
import Button from './Button';
import { RpnBuffer } from '../App';

type Props = {
  buffer: RpnBuffer;
  setBuffer: (buffer: RpnBuffer) => void;
};

const Buttons: FunctionComponent<Props> = ({ buffer, setBuffer }) => (
  <div>
    <Button onClick={() => {
      const newBuffer: RpnBuffer = { ...buffer };
      newBuffer.input = newBuffer.input * 10 + 1;
      setBuffer(newBuffer);
    }}>
      1
    </Button>
    <Button onClick={() => {
      const newBuffer: RpnBuffer = { ...buffer };
      newBuffer.numbers.unshift(newBuffer.input);
      newBuffer.input = 0;
      setBuffer(newBuffer);
    }}>
      Enter
    </Button>
    <Button onClick={() => {
      const newBuffer: RpnBuffer = { ...buffer };
      if (newBuffer.numbers.length > 1) {
        const sum = newBuffer.numbers[0] + newBuffer.numbers[1];
        newBuffer.numbers.splice(0, 2);
        newBuffer.numbers.unshift(sum);
        setBuffer(newBuffer);
      }
    }}>
      +
    </Button>
    <Button onClick={() => {
      const newBuffer: RpnBuffer = { ...buffer };
      if (newBuffer.numbers.length > 1) {
        const first = newBuffer.numbers[0];
        const second = newBuffer.numbers[1];
        newBuffer.numbers.splice(0, 2);
        newBuffer.numbers.unshift(first);
        newBuffer.numbers.unshift(second);
        setBuffer(newBuffer);
      }
    }}>
      Swap
    </Button>
  </div>
);

export default Buttons;