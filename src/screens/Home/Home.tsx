import {FC} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import Layout from '../../components/UIELements/Layout';
import {useGetQuery} from '../../hooks/useGetQuery';
import EndPoints from '../../apis/EndPoints';
import UserCard from '../../components/UserCard';
import Text from '../../components/UIELements/Text';
import useUser from '../../hooks/useUser';
import Loading from '../../components/UIELements/Loading';
import ErrorHappen from '../../components/UIELements/ErrorHappen';
import UsersType, {UserDataType} from '../../types/Users.type';
import useNavigation from '../../hooks/useNavigation';
import routes from '../../navigation/routes';

type HomeProps = {};

const Home: FC<HomeProps> = () => {
  const {navigate} = useNavigation();
  const {data: user} = useUser();
  const {data, isLoading, isError, refetch} = useGetQuery<UsersType>({
    queryKey: ['users'],
    endPoint: EndPoints.users,
  });

  const handleUserCardPress = (item: UserDataType) => () => {
    navigate(routes.Details, item);
  };

  return (
    <Layout style={styles.container} onRefresh={refetch}>
      <Text size="xlarge" bold>
        Hello , {user?.name}
      </Text>

      {!isLoading ? (
        <>
          {!isError ? (
            <FlatList
              data={data?.users}
              keyExtractor={item => item?.id + ''}
              renderItem={({item}) => (
                <UserCard
                  name={item?.name}
                  onPress={handleUserCardPress(item)}
                />
              )}
            />
          ) : (
            <ErrorHappen />
          )}
        </>
      ) : (
        <Loading />
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
