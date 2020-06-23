import React, { FunctionComponent } from 'react';

type Props = {
  onClick: () => void;
};

const Button: FunctionComponent<Props> = ({ children, onClick }) => (
  <button
    className="p-4 border bg-gray-700 border-gray-800"
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;