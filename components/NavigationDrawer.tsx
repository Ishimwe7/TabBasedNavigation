// import React, { useRef } from 'react';
// import { View, Text, StyleSheet, DrawerLayoutAndroid, TouchableOpacity } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
// import { DrawerNavigationProp } from '@react-navigation/drawer';
// import Login from './Login';
// import Registration from './Registration';
// import Calculator from './Calculator';


// type RootDrawerParamList = {
//     Login: undefined;
//     Registration: undefined;
//     Calculator: undefined;
// };

// type CustomDrawerContentProps = {
//   navigation: DrawerNavigationProp<RootDrawerParamList>;
// };

// const Drawer = createDrawerNavigator<RootDrawerParamList>();

// const CustomDrawerContent: React.FC<CustomDrawerContentProps> = ({ navigation }) => {
//   const navigateToScreen = (screenName: keyof RootDrawerParamList) => {
//     navigation.navigate(screenName);
//   };

//   return (
//     <DrawerContentScrollView style={styles.drawerContent}>
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

// const NavigationDrawer: React.FC = () => {
//   const drawerRef = useRef<DrawerLayoutAndroid>(null);

//   const openDrawer = () => {
//     if (drawerRef.current) {
//       drawerRef.current.openDrawer();
//     }
//   };

//   return (
//     <DrawerLayoutAndroid
//       ref={drawerRef}
//       drawerWidth={250}
//       drawerPosition={'left'}
//       renderNavigationView={() => <CustomDrawerContent navigation={null!} />} // Pass null initially
//     >
//       <TouchableOpacity onPress={openDrawer} style={styles.menuButton}>
//         <Text>☰</Text>
//       </TouchableOpacity>
//       <NavigationContainer>
//         <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />} initialRouteName="Home">
//           <Drawer.Screen name="Login" component={Login} />
//           <Drawer.Screen name="Profile" component={Registration} />
//         </Drawer.Navigator>
//       </NavigationContainer>
//     </DrawerLayoutAndroid>
//   );
// };

// const styles = StyleSheet.create({
//   drawerContent: {
//     flex: 1,
//   },
//   menuButton: {
//     marginLeft: 10,
//     marginTop: 10,
//     padding: 10,
//     borderRadius: 5,
//     backgroundColor: '#ccc',
//   },
// });

// export default NavigationDrawer;


import React, { useRef } from 'react';
import { View, Text, StyleSheet, DrawerLayoutAndroid, TouchableOpacity } from 'react-native';
import { NavigationContainer, ParamListBase } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Login from './LoginDrawer';
import Registration from './Registration';
import Calculator from './CalculatorDrawer';
import { DrawerNavigationProp } from '@react-navigation/drawer';


type RootDrawerParamList = {
  Login: undefined;
  Registration: undefined;
  Calculator: undefined;
};

type CustomDrawerContentProps = {
  navigation: DrawerNavigationProp<RootDrawerParamList>;
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();

const CustomDrawerContent: React.FC<CustomDrawerContentProps> = ({ navigation }) => {
  const navigateToScreen = (screenName: keyof RootDrawerParamList) => {
    navigation.navigate(screenName);
  };


  return (
    <DrawerContentScrollView style={styles.drawerContent}>
      <DrawerItem
        label="Login"
        onPress={() => navigateToScreen('Login')}
      />
      <DrawerItem
        label="Register"
        onPress={() => navigateToScreen('Registration')}
      />
      <DrawerItem
        label="Calculator"
        onPress={() => navigateToScreen('Calculator')}
      />
    </DrawerContentScrollView>
  );
};

const NavigationDrawer: React.FC = () => {
  const drawerRef = useRef<DrawerLayoutAndroid>(null);

  const openDrawer = () => {
    if (drawerRef.current) {
      drawerRef.current.openDrawer();
    }
  };

  return (
    <DrawerLayoutAndroid
      ref={drawerRef}
      drawerWidth={250}
      drawerPosition={'left'}
      renderNavigationView={() => <CustomDrawerContent navigation={null!} />} // Pass null initially
    >
      <TouchableOpacity onPress={openDrawer} style={styles.menuButton}>
        <Text>☰</Text>
      </TouchableOpacity>
      <NavigationContainer>
        <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />} initialRouteName="Login">
          <Drawer.Screen name="Login" component={Login} />
          <Drawer.Screen name="Registration" component={Registration} />
          <Drawer.Screen name="Calculator" component={Calculator} />
        </Drawer.Navigator>
      </NavigationContainer>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  menuButton: {
    marginLeft: 10,
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#ccc',
  },
});

export default NavigationDrawer;
