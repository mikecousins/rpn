import React, { FunctionComponent } from 'react';

type Props = {
  value?: number;
};

const Input: FunctionComponent<Props> = ({ value }) => (
  <div>{value}</div>
);

export default Input;