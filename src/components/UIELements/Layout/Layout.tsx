import React, {FC} from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './Layout.style';
import LayoutProps from './Layout.type';

const behavior = Platform.OS === 'ios' ? 'padding' : 'height';

const Layout: FC<LayoutProps> = ({Content, children, Header, style}) => {
  const {top} = useSafeAreaInsets();

  const ContentComponent = () => (Content ? <Content /> : <>{children}</>);

  const HeaderComponent = () => (Header ? <Header /> : <></>);

  return (
    <KeyboardAvoidingView
      behavior={behavior}
      style={[styles.wrapper, style, {paddingTop: top}]}>
      <HeaderComponent />
      <ContentComponent />
    </KeyboardAvoidingView>
  );
};

export default Layout;
