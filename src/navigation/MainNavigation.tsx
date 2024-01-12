import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Testing from '../screens/Testing';

type MainNavigationProps = {};
const Stack = createStackNavigator();

const MainNavigation: FC<MainNavigationProps> = props => {
  return (
    <Stack.Navigator
      initialRouteName="Testing"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'testing'} component={Testing} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
