import React from 'react';
import { DrawerProvider } from '@/components/drawerContext';
import AppNavigator from '@/components/AppNavigator';

export default function App() {
  return (
    <DrawerProvider>
      <AppNavigator />
    </DrawerProvider>
  );
}