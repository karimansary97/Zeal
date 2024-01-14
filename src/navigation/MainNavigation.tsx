import {FC, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import routes from './routes';
import SignIn from '../screens/Auth/SigIn';
import SignUp from '../screens/Auth/SignUp';
import Home from '../screens/Home/Home';
import useJwt from '../hooks/useJwt';
import RNBootSplash from 'react-native-bootsplash';
import useUser from '../hooks/useUser';
import Details from '../screens/Details';
import Location from '../screens/Location';

type MainNavigationProps = {};
const Stack = createStackNavigator();

const MainNavigation: FC<MainNavigationProps> = () => {
  const {data} = useJwt();
  useUser();

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
        <Stack.Group>
          <Stack.Screen name={routes.Home} component={Home} />
          <Stack.Screen name={routes.Details} component={Details} />
          <Stack.Screen name={routes.AddLocation} component={Location} />
        </Stack.Group>
      ) : (
        <Stack.Group>
          <Stack.Screen name={routes.SignIn} component={SignIn} />
          <Stack.Screen name={routes.SignUp} component={SignUp} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};

export default MainNavigation;
