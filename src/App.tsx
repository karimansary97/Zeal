import 'react-native-gesture-handler';
import 'react-native-devsettings';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './navigation/MainNavigation';
import {PersistQueryClientProvider} from '@tanstack/react-query-persist-client';
import appQueryClient, {asyncStoragePersister} from './config/appQueryClient';
import {NotifierWrapper} from 'react-native-notifier';
import {StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <NavigationContainer>
        <PersistQueryClientProvider
          client={appQueryClient}
          persistOptions={{persister: asyncStoragePersister}}>
          <NotifierWrapper>
            <MainNavigation />
          </NotifierWrapper>
        </PersistQueryClientProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
