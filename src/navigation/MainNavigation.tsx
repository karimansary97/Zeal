import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import routes from './routes';
import SignIn from '../screens/Auth/SigIn/SignIn';
import SignUp from '../screens/Auth/SignUp';

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
      <Stack.Screen name={routes.SignUp} component={SignUp} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
