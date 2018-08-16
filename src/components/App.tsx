import React from 'react';
import FullInfo from './FullInfo';
interface AppProps {
  message: string;
}

export default function ({ message }: AppProps) {
  return (
    <div>
      <FullInfo />
    </div>
  );
}
