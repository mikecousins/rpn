import React, { FunctionComponent } from 'react';

type Props = {
  value: string;
};

const Input: FunctionComponent<Props> = ({ value }) => (
  <div className="text-right">{value === '' ? <span>&nbsp;</span> : value}</div>
);

export default Input;