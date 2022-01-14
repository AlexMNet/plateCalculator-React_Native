import * as React from 'react';
import { StatusBar, Appearance } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import EStyleSheet from 'react-native-extended-stylesheet';

import Home from './screens/Home';
import Max from './screens/Max';
import { ThemeProvider } from './theme/ThemeProvider';
const Tab = createMaterialTopTabNavigator();
import TabNavigation from './components/navigation/TabNavigator';
import SafeArea from './components/SafeAreaView';

//Configure Extended Style Sheet
EStyleSheet.build({});

export default function App() {
  return (
    <ThemeProvider>
      <SafeArea>
        <NavigationContainer>
          <TabNavigation>
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
          </TabNavigation>
        </NavigationContainer>
      </SafeArea>
    </ThemeProvider>
  );
}
