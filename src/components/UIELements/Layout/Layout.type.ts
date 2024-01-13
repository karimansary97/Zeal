import {FC, ReactNode} from 'react';
import {ViewStyle} from 'react-native';

type LayoutProps = {
  HeaderVisablity?: boolean;
  Content?: FC;
  children?: ReactNode;
  Header?: FC;
  style?: ViewStyle;
};

export default LayoutProps;
