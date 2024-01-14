import {FC} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
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
import unit from '../../styles/unit';
import Button from '../../components/UIELements/Button';

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
  const handleonAddUserPress = () => {
    navigate(routes.EditUser, {edite: false});
  };

  return (
    <Layout style={styles.container} onRefresh={refetch}>
      <Text size="xlarge" bold>
        Hello , {user?.name}
      </Text>
      <View style={styles.subContainer}>
        <Text size="large" bold>
          Locations
        </Text>
        <Button size="sm" text="Add User" onPress={handleonAddUserPress} />
      </View>
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
                  email={item?.email}
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
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12 * unit,
    justifyContent: 'space-between',
  },
});

export default Home;
