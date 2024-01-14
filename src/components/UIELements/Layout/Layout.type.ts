import {FC, ReactNode} from 'react';
import {ViewStyle} from 'react-native';

type LayoutProps = {
  HeaderVisablity?: boolean;
  Content?: FC;
  children?: ReactNode;
  style?: ViewStyle;
  scrollEnabled?: boolean;
  isError?: boolean;
  onRefresh?: () => void;
};

export default LayoutProps;
