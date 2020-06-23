import React, { FunctionComponent } from 'react';

type Props = {
  index: number;
  value: number;
}

const DisplayRow: FunctionComponent<Props> = ({ index, value }) => (
  <div><span>{index}</span><span>{value}</span></div>
);

export default DisplayRow;