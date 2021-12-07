import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import Home from './screens/Home';
import Max from './screens/Max';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        tabBarPosition='top'
        style={{ marginTop: 30 }}
      >
        <Tab.Screen
          name='Home'
          component={Home}
          options={{
            title: 'Plate Calculator',
            tabBarIcon: () => (
              <Ionicons name='barbell-sharp' size={25} color='#0891b2' />
            ),
          }}
        />
        <Tab.Screen
          name='Max'
          component={Max}
          options={{
            title: '1 Rep Max',
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name='weight-lifter'
                size={24}
                color='#0891b2'
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
