import React, { FunctionComponent } from 'react';
import { RpnBuffer } from '../App';
import DisplayRow from './DisplayRow';
import Input from './Input';

type Props = {
  buffer: RpnBuffer;
};

const Display: FunctionComponent<Props> = ({ buffer }) => (
  <div className="flex-1 bg-gray-300 font-mono p-4 flex flex-col justify-end text-2xl overflow-auto">
    {buffer.numbers.slice(0).reverse().map((value, index) => <DisplayRow value={value} index={buffer.numbers.length - index} key={index} />)}
    <Input value={buffer.input} />
  </div>
);

export default Display;