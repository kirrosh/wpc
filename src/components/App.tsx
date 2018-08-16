import React from 'react';
import FullInfo from './FullInfo';
interface AppProps {
  message: string;
}

export default function ({ message }: AppProps) {
  return (
    <div>
      <h1>Hello {message}</h1>
      <FullInfo />
    </div>
  );
}
