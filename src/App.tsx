import 'react-native-gesture-handler';
import 'react-native-devsettings';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './navigation/MainNavigation';
import {PersistQueryClientProvider} from '@tanstack/react-query-persist-client';
import appQueryClient, {asyncStoragePersister} from './config/appQueryClient';

const App = () => {
  return (
    <PersistQueryClientProvider
      client={appQueryClient}
      persistOptions={{persister: asyncStoragePersister}}>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </PersistQueryClientProvider>
  );
};

export default App;
