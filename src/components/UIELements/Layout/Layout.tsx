import {FC} from 'react';
import {KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './Layout.style';
import LayoutProps from './Layout.type';

const behavior = Platform.OS === 'ios' ? 'padding' : 'height';

const Layout: FC<LayoutProps> = ({children, Header, style}) => {
  const {top} = useSafeAreaInsets();

  const HeaderComponent = () => (Header ? <Header /> : <></>);

  return (
    <KeyboardAvoidingView
      behavior={behavior}
      style={[styles.wrapper, {paddingTop: top}]}>
      <ScrollView contentContainerStyle={[styles.content, style]}>
        <HeaderComponent />
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Layout;
