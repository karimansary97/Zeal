import {RouteProp, useRoute as useNativeRoute} from '@react-navigation/native';

type RouteType = RouteProp<{}>;

const useRoute = () => {
  return useNativeRoute<RouteType>();
};

export default useRoute;
