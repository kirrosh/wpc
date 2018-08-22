import React from 'react';
import MainLayout from 'components/MainLayout';
import { HeaderLayout, AppLayout } from './styled';


interface AppProps {
  message: string;
}

export default function ({ message }: AppProps) {
  return (
    <AppLayout>
      <HeaderLayout/>
      <MainLayout/>
    </AppLayout>
  );
}
