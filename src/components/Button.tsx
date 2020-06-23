import React, { FunctionComponent } from 'react';

type Props = {
  onClick: () => void;
};

const Button: FunctionComponent<Props> = ({ children, onClick }) => (
  <button onClick={onClick}>
    {children}
  </button>
);

export default Button;