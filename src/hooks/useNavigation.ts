import {useNavigation as useNativeNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type NavigationType = StackNavigationProp<any>;

const useNavigation = () => {
  return useNativeNavigation<NavigationType>();
};

export default useNavigation;
