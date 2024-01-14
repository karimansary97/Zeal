import {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import Layout from '../../components/UIELements/Layout';
import {useGetQuery} from '../../hooks/useGetQuery';
import EndPoints from '../../apis/EndPoints';
import Text from '../../components/UIELements/Text';
import useUser from '../../hooks/useUser';
import Loading from '../../components/UIELements/Loading';
import UsersType from '../../types/Users.type';
import UserList from '../../components/UserList';
import Button from '../../components/UIELements/Button';
import {LogOutIcon} from '../../styles/icons';
import unit from '../../styles/unit';
import appQueryClient from '../../config/appQueryClient';

type HomeProps = {};

const Home: FC<HomeProps> = () => {
  const {data: user} = useUser();
  const {data, isLoading, isError, refetch} = useGetQuery<UsersType>({
    queryKey: ['users'],
    endPoint: EndPoints.users,
  });
  const handleOnLogOutPress = () => {
    appQueryClient.setQueryData(['userInfo'], '');
    appQueryClient.setQueryData(['Jwt'], '');
  };
  return (
    <Layout onRefresh={refetch}>
      <View style={styles.container}>
        <Text size="xlarge" bold>
          Hello , {user?.name}
        </Text>
        <Button Icon={LogOutIcon} onPress={handleOnLogOutPress} />
      </View>
      {!isLoading ? (
        <UserList users={data?.users} isError={isError} />
      ) : (
        <Loading />
      )}
    </Layout>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24 * unit,
  },
});

export default Home;
