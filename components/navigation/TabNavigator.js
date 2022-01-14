import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();
import { useThemeContext } from '../../theme/ThemeProvider';

const TabNavigation = ({ children }) => {
  const colorScheme = useThemeContext();

  return (
    <Tab.Navigator
      initialRouteName='Home'
      tabBarPosition='top'
      style={{ marginTop: 0 }}
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: colorScheme.background,
        },
        tabBarLabelStyle: {
          color: colorScheme.textPrimary,
        },
      })}
    >
      {children}
    </Tab.Navigator>
  );
};

export default TabNavigation;
