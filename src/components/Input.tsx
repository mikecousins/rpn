import React, { FunctionComponent } from 'react';

type Props = {
  value?: number;
};

const Input: FunctionComponent<Props> = ({ value }) => (
  <div className="text-right">{value}</div>
);

export default Input;