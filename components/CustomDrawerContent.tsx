import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerContentComponentProps
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

const CustomDrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader}>
        <Image
          source={require('../assets/images/new-profile.jpg')} 
          style={styles.profileImage}
        />
        <Text style={styles.nameText}>End.Nyanja</Text>
      </View>
      <DrawerItem
        label="Sign Up"
        icon={({ color, size }) => (
          <Icon name="person-add-outline" color={color} size={size} />
        )}
        onPress={() => props.navigation.navigate('Registration')}
      />
      <DrawerItem
        label="Sign In"
        icon={({ color, size }) => (
          <Icon name="log-in-outline" color={color} size={size} />
        )}
        onPress={() => props.navigation.navigate('Login')}
      />
      <DrawerItem
        label="Calculator"
        icon={({ color, size }) => (
          <Icon name="calculator-outline" color={color} size={size} />
        )}
        onPress={() => props.navigation.navigate('Calculator')}
      />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerHeader: {
    backgroundColor: '#f6f6f6',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CustomDrawerContent;