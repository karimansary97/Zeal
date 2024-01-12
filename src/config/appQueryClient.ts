import {QueryClient} from '@tanstack/react-query';
import {createAsyncStoragePersister} from '@tanstack/query-async-storage-persister';
import EncryptedStorage from 'react-native-encrypted-storage';

const appQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 0, // 0 hours caching
    },
  },
});
export const asyncStoragePersister = createAsyncStoragePersister({
  storage: EncryptedStorage,
});

export default appQueryClient;
