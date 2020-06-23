import React, { FunctionComponent } from 'react';

const Calculator: FunctionComponent = ({ children }) => (
  <div className="max-w-6xl mx-auto h-screen flex flex-col bg-gray-900 p-4">
    {children}
  </div>
);

export default Calculator;