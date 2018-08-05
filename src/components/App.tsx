import * as React from 'react';
import Wow from './Wow';
interface AppProps {
  message: string;
}

export default function ({ message }: AppProps) {
  return (
    <div>
      <h1>Hello {message}</h1>
      <Wow />
    </div>
  );
}
