import React from 'react';
import { ThemeProvider } from '@/components/ThemeContext';
import { DrawerProvider } from '@/components/drawerContext';
import AppNavigator from '@/components/AppNavigator';

export default function App() {
  return ( 
   <ThemeProvider> 
    <DrawerProvider>
      <AppNavigator />
    </DrawerProvider>
   </ThemeProvider>
  );
}