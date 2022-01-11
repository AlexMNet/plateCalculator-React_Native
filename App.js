import * as React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import EStyleSheet from 'react-native-extended-stylesheet';

import Home from './screens/Home';
import Max from './screens/Max';

const Tab = createMaterialTopTabNavigator();

//Configure Extended Style Sheet
EStyleSheet.build({});

export default function App() {
  return (
    <SafeAreaView
      edges={['top', 'left', 'right']}
      style={{ flex: 1, marginTop: StatusBar.currentHeight }}
    >
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName='Home'
          tabBarPosition='top'
          style={{ marginTop: 0 }}
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
    </SafeAreaView>
  );
}
