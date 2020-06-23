import React, { FunctionComponent } from 'react';
import Button from './Button';
import { RpnBuffer } from '../App';

type Props = {
  buffer: RpnBuffer;
  setBuffer: (buffer: RpnBuffer) => void;
};

const Buttons: FunctionComponent<Props> = ({ buffer, setBuffer }) => (
  <div className="flex-1 mt-2 grid grid-cols-4 gap-4">
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
    <Button onClick={() => {
      const newBuffer: RpnBuffer = { ...buffer };
      if (newBuffer.numbers.length > 0) {
        newBuffer.numbers.splice(0, 1);
        setBuffer(newBuffer);
      }
    }}>
      Drop
    </Button>
    <Button onClick={() => {
      const newBuffer: RpnBuffer = { ...buffer };
      if (newBuffer.numbers.length > 1) {
        newBuffer.numbers = [];
        newBuffer.input = 0;
        setBuffer(newBuffer);
      }
    }}>
      Clear
    </Button>
    <Button onClick={() => {
      const newBuffer: RpnBuffer = { ...buffer };
      newBuffer.input = newBuffer.input * 10 + 7;
      setBuffer(newBuffer);
    }}>
      7
    </Button>
    <Button onClick={() => {
      const newBuffer: RpnBuffer = { ...buffer };
      newBuffer.input = newBuffer.input * 10 + 8;
      setBuffer(newBuffer);
    }}>
      8
    </Button>
    <Button onClick={() => {
      const newBuffer: RpnBuffer = { ...buffer };
      newBuffer.input = newBuffer.input * 10 + 9;
      setBuffer(newBuffer);
    }}>
      9
    </Button>
    <Button onClick={() => {
      const newBuffer: RpnBuffer = { ...buffer };
      if (newBuffer.numbers.length > 1) {
        const value = newBuffer.numbers[1] / newBuffer.numbers[0];
        newBuffer.numbers.splice(0, 2);
        newBuffer.numbers.unshift(value);
        setBuffer(newBuffer);
      }
    }}>
      /
    </Button>
    <Button onClick={() => {
      const newBuffer: RpnBuffer = { ...buffer };
      newBuffer.input = newBuffer.input * 10 + 4;
      setBuffer(newBuffer);
    }}>
      4
    </Button>
    <Button onClick={() => {
      const newBuffer: RpnBuffer = { ...buffer };
      newBuffer.input = newBuffer.input * 10 + 5;
      setBuffer(newBuffer);
    }}>
      5
    </Button>
    <Button onClick={() => {
      const newBuffer: RpnBuffer = { ...buffer };
      newBuffer.input = newBuffer.input * 10 + 6;
      setBuffer(newBuffer);
    }}>
      6
    </Button>
    <Button onClick={() => {
      const newBuffer: RpnBuffer = { ...buffer };
      if (newBuffer.numbers.length > 1) {
        const value = newBuffer.numbers[1] * newBuffer.numbers[0];
        newBuffer.numbers.splice(0, 2);
        newBuffer.numbers.unshift(value);
        setBuffer(newBuffer);
      }
    }}>
      *
    </Button>
    <Button onClick={() => {
      const newBuffer: RpnBuffer = { ...buffer };
      newBuffer.input = newBuffer.input * 10 + 1;
      setBuffer(newBuffer);
    }}>
      1
    </Button>
    <Button onClick={() => {
      const newBuffer: RpnBuffer = { ...buffer };
      newBuffer.input = newBuffer.input * 10 + 2;
      setBuffer(newBuffer);
    }}>
      2
    </Button>
    <Button onClick={() => {
      const newBuffer: RpnBuffer = { ...buffer };
      newBuffer.input = newBuffer.input * 10 + 3;
      setBuffer(newBuffer);
    }}>
      3
    </Button>
    <Button onClick={() => {
      const newBuffer: RpnBuffer = { ...buffer };
      if (newBuffer.numbers.length > 1) {
        const value = newBuffer.numbers[1] - newBuffer.numbers[0];
        newBuffer.numbers.splice(0, 2);
        newBuffer.numbers.unshift(value);
        setBuffer(newBuffer);
      }
    }}>
      -
    </Button>
    <Button onClick={() => {
      const newBuffer: RpnBuffer = { ...buffer };
      newBuffer.input = newBuffer.input * 10 + 0;
      setBuffer(newBuffer);
    }}>
      0
    </Button>
    <Button onClick={() => {
      const newBuffer: RpnBuffer = { ...buffer };
      newBuffer.input = newBuffer.input * 10 + 1;
      setBuffer(newBuffer);
    }}>
      .
    </Button>
    <Button onClick={() => {}}>
      ???
    </Button>
    <Button onClick={() => {
      const newBuffer: RpnBuffer = { ...buffer };
      if (newBuffer.numbers.length > 1) {
        const value = newBuffer.numbers[0] + newBuffer.numbers[1];
        newBuffer.numbers.splice(0, 2);
        newBuffer.numbers.unshift(value);
        setBuffer(newBuffer);
      }
    }}>
      +
    </Button>
  </div>
);

export default Buttons;