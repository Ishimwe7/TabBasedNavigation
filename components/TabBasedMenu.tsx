import React, { useState } from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Calculator from '@/components/Calculator';
import Login from '@/components/Login';
import Registration from '@/components/Registration';
import { TabParamList, NavigationProps } from './types';

const Tab = createBottomTabNavigator<TabParamList>();

const CustomHeader: React.FC = () => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <TouchableOpacity
      onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      style={{ marginLeft: 10 }}
    >
      <Icon name={Platform.OS === 'ios' ? 'ios-menu' : 'menu'} size={30} color={'#222'} />
    </TouchableOpacity>
  );
};

export default function TabBasedNavigation() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = (navigation: NavigationProps) => {
    setIsLoggedIn(false);
    navigation.navigate('Login');
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string;

          if (route.name === 'Registration') {
            iconName = focused ? 'person-add' : 'person-add-outline';
          } else if (route.name === 'Login') {
            iconName = focused ? 'log-in' : 'log-in-outline';
          } else if (route.name === 'Calculator') {
            iconName = focused ? 'calculator' : 'calculator-outline';
          } else {
            iconName = 'alert';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: true,
        headerTitle: '',
        headerLeft: () => <CustomHeader />,
      })}
    >
      <Tab.Screen
        name="Registration"
        component={Registration}
        options={{ tabBarLabel: 'Sign Up' }}
      />
      <Tab.Screen
        name="Login"
        options={{ tabBarLabel: 'Sign In' }}
      >
        {() => <Login onLogin={handleLogin} />}
      </Tab.Screen>
      <Tab.Screen
        name="Calculator"
        options={{ tabBarLabel: 'Calculator' }}
      >
        {({ navigation }) => (isLoggedIn ? <Calculator onLogout={() => handleLogout(navigation)} /> : <Login onLogin={handleLogin} />)}
      </Tab.Screen>
    </Tab.Navigator>
  );
}