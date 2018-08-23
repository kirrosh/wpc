import React from 'react';
import MainLayout from 'components/MainLayout';
import { AppLayout } from './styled';
import HeaderLayout from 'components/HeaderLayout';


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
