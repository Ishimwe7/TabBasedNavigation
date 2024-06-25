import Calculator from '@/components/Calculator';
import Login from '@/components/Login';
import Registration from '@/components/Registration';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, NavigationProp, ParamListBase } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Platform } from 'react-native';
import { useState } from 'react';



export default function TabBasedNavigation() {
  const Tab = createBottomTabNavigator();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  }

   const handleLogout = (navigation:NavigationProp<ParamListBase>) => {
     setIsLoggedIn(false);
     navigation.navigate('Login');
  };
  return (
    <NavigationContainer independent>
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
          headerShown: false,
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
          {({ navigation }) => (isLoggedIn ? <Calculator onLogout={()=>handleLogout(navigation)} /> : <Login onLogin={handleLogin} />)}
        </Tab.Screen>
        </Tab.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#ffffff', // Example background color
    borderTopWidth: 1,
    borderTopColor: '#dddddd',
    paddingBottom: Platform.OS === 'ios' ? 20 : 0, // Adjust for iOS notch
  },
  tabBarLabel: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});