import {FC} from 'react';
import Layout from '../../components/UIELements/Layout';
import {useGetQuery} from '../../hooks/useGetQuery';
import EndPoints from '../../apis/EndPoints';
import Text from '../../components/UIELements/Text';
import useUser from '../../hooks/useUser';
import Loading from '../../components/UIELements/Loading';
import UsersType from '../../types/Users.type';
import UserList from '../../components/UserList';

type HomeProps = {};

const Home: FC<HomeProps> = () => {
  const {data: user} = useUser();
  const {data, isLoading, isError, refetch} = useGetQuery<UsersType>({
    queryKey: ['users'],
    endPoint: EndPoints.users,
  });

  return (
    <Layout onRefresh={refetch}>
      <Text size="xlarge" bold>
        Hello , {user?.name}
      </Text>
      {!isLoading ? (
        <UserList users={data?.users} isError={isError} />
      ) : (
        <Loading />
      )}
    </Layout>
  );
};

export default Home;
