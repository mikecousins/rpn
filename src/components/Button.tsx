import React, { FunctionComponent } from 'react';

type Props = {
  onClick: () => void;
};

const Button: FunctionComponent<Props> = ({ children, onClick }) => (
  <button
    className="p-4 border bg-gray-800 border-gray-700 text-gray-300"
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;