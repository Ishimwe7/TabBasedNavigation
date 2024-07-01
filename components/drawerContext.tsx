// import React, { createContext, useContext, useRef, useCallback } from 'react';

// const DrawerContext = createContext<{
//   openDrawer: () => void;
// } | null>(null);

// export const useDrawer = () => {
//   const context = useContext(DrawerContext);
//   if (!context) {
//     throw new Error('useDrawer must be used within a DrawerProvider');
//   }
//   return context;
// };

//import { createContext, useContext } from 'react';
// import React, { createContext, useContext, useRef, ReactNode } from 'react';
// import { DrawerLayoutAndroid } from 'react-native';
// const DrawerContext = createContext<() => void>(() => { });
// import { CustomDrawerContent } from './CustomDrawerContent';

// export const useDrawer = () => {
//   const context = useContext(DrawerContext);
//   if (context === undefined) {
//     throw new Error('useDrawer must be used within a DrawerProvider');
//   }
//   return context;
// };

// type DrawerProviderProps = {
//   children: ReactNode;
// };

// export const DrawerProvider:React.FC<DrawerProviderProps> = ({ children }) => {
//   const drawerRef = useRef<DrawerLayoutAndroid>(null);

//   const openDrawer = () => {
//     if (drawerRef.current) {
//       drawerRef.current.openDrawer();
//     }
//   };

//   return (
//     <DrawerContext.Provider value={openDrawer}>
//       <DrawerLayoutAndroid
//         ref={drawerRef}
//         drawerWidth={250}
//         drawerPosition="left"
//         renderNavigationView={() => <CustomDrawerContent />}
//       >
//         {children}
//       </DrawerLayoutAndroid>
//     </DrawerContext.Provider>
//   );
// };

// import React from 'react';
// import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

// type RootDrawerParamList = {
//   Login: undefined;
//   Registration: undefined;
//   Calculator: undefined;
// };

// const CustomDrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
//   const { navigation } = props;

//   const navigateToScreen = (screenName: keyof RootDrawerParamList) => {
//     navigation.navigate(screenName);
//   };

//   return (
//     <DrawerContentScrollView {...props} style={{ flex: 1 }}>
//       <DrawerItem
//         label="Login"
//         onPress={() => navigateToScreen('Login')}
//       />
//       <DrawerItem
//         label="Register"
//         onPress={() => navigateToScreen('Registration')}
//       />
//       <DrawerItem
//         label="Calculator"
//         onPress={() => navigateToScreen('Calculator')}
//       />
//     </DrawerContentScrollView>
//   );
// };

// export default CustomDrawerContent;


// ********************************************************************************

// import React, { createContext, useContext, useState, ReactNode } from 'react';

// // Define the shape of your drawer context
// type DrawerContextType = {
//   isOpen: boolean;
//   openDrawer: () => void;
//   closeDrawer: () => void;
//   toggleDrawer: () => void;
// };

// // Create the context
// const DrawerContext = createContext<DrawerContextType | undefined>(undefined);

// // Create the useDrawer hook
// export const useDrawer = () => {
//   const context = useContext(DrawerContext);
//   if (context === undefined) {
//     throw new Error('useDrawer must be used within a DrawerProvider');
//   }
//   return context;
// };

// // Create the DrawerProvider component
// type DrawerProviderProps = {
//   children: ReactNode;
// };

// export const DrawerProvider: React.FC<DrawerProviderProps> = ({ children }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const openDrawer = () => setIsOpen(true);
//   const closeDrawer = () => setIsOpen(false);
//   const toggleDrawer = () => setIsOpen(prev => !prev);

//   const value = {
//     isOpen,
//     openDrawer,
//     closeDrawer,
//     toggleDrawer,
//   };

//   return (
//     <DrawerContext.Provider value={value}>
//       {children}
//     </DrawerContext.Provider>
//   );
// };

// *************************************************************************8

// drawerContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

type DrawerContextType = {
  isOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  toggleDrawer: () => void;
};

const DrawerContext = createContext<DrawerContextType | undefined>(undefined);

export const useDrawer = () => {
  const context = useContext(DrawerContext);
  if (context === undefined) {
    throw new Error('useDrawer must be used within a DrawerProvider');
  }
  return context;
};

type DrawerProviderProps = {
  children: ReactNode;
};

export const DrawerProvider: React.FC<DrawerProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDrawer = () => setIsOpen(true);
  const closeDrawer = () => setIsOpen(false);
  const toggleDrawer = () => setIsOpen(prev => !prev);

  const value = {
    isOpen,
    openDrawer,
    closeDrawer,
    toggleDrawer,
  };

  return (
    <DrawerContext.Provider value={value}>
      {children}
    </DrawerContext.Provider>
  );
};