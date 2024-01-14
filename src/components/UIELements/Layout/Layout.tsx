import {FC} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  RefreshControl,
  ScrollView,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './Layout.style';
import LayoutProps from './Layout.type';
import colors from '../../../styles/colors';
import Header from './Header';
import ErrorHappen from '../ErrorHappen';

const behavior = Platform.OS === 'ios' ? 'padding' : 'height';

const Layout: FC<LayoutProps> = ({
  children,
  HeaderVisablity = false,
  style,
  scrollEnabled = true,
  isError = false,
  onRefresh,
}) => {
  const {top} = useSafeAreaInsets();

  return (
    <KeyboardAvoidingView
      behavior={behavior}
      style={[styles.wrapper, {paddingTop: top}]}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={onRefresh}
            enabled
            colors={[colors.secondary]}
          />
        }
        scrollEnabled={scrollEnabled}
        nestedScrollEnabled
        contentContainerStyle={[styles.content, style]}>
        {HeaderVisablity && <Header />}
        {isError ? <ErrorHappen /> : <>{children}</>}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Layout;
