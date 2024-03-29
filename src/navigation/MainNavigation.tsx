import {FC, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import routes from './routes';
import SignIn from '../screens/Auth/SigIn';
import SignUp from '../screens/Auth/SignUp';
import Home from '../screens/Home/Home';
import useJwt from '../hooks/useJwt';
import RNBootSplash from 'react-native-bootsplash';

type MainNavigationProps = {};
const Stack = createStackNavigator();

const MainNavigation: FC<MainNavigationProps> = () => {
  const {data} = useJwt();

  useEffect(() => {
    if (data !== undefined) {
      RNBootSplash.hide({fade: true});
    }
  }, [data]);

  return data === undefined ? null : (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {data ? (
        <Stack.Screen name={routes.Home} component={Home} />
      ) : (
        <>
          <Stack.Screen name={routes.SignIn} component={SignIn} />
          <Stack.Screen name={routes.SignUp} component={SignUp} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default MainNavigation;
