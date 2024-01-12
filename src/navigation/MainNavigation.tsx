import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import routes from './routes';
import SignIn from '../screens/Auth/SigIn/SignIn';

type MainNavigationProps = {};
const Stack = createStackNavigator();

const MainNavigation: FC<MainNavigationProps> = props => {
  return (
    <Stack.Navigator
      initialRouteName="Testing"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={routes.SignIn} component={SignIn} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
