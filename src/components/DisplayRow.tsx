import React, { FunctionComponent } from 'react';

type Props = {
  index: number;
  value: number;
}

const DisplayRow: FunctionComponent<Props> = ({ index, value }) => (
  <div className="w-full flex">
    <div className="flex-1 text-gray-400">{index}</div>
    <div className="">{value}</div>
  </div>
);

export default DisplayRow;