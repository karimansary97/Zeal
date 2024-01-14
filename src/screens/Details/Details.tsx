import {FC} from 'react';
import {StyleSheet} from 'react-native';
import Layout from '../../components/UIELements/Layout';
import useRoute from '../../hooks/useRoute';
import DetailsUserCard from '../../components/DetailsUserCard';
import LocationList from '../../components/LocationList';
import {useGetQuery} from '../../hooks/useGetQuery';
import EndPoints from '../../apis/EndPoints';
import Loading from '../../components/UIELements/Loading';
import SingleUserType from '../../types/SingleUser.type';

type DetailsProps = {};

type params = {id: number; name: string; email: string};

const Details: FC<DetailsProps> = () => {
  const {params} = useRoute();
  const {email}: params = params ?? {};
  const {
    data: userData,
    refetch,
    isError,
    isLoading,
  } = useGetQuery<SingleUserType>({
    queryKey: ['singleUser', email],
    endPoint: `${EndPoints.users}/${email}`,
  });
  const {user, locations} = userData ?? {};
  return (
    <Layout
      style={styles.container}
      HeaderVisablity
      onRefresh={refetch}
      isError={isError}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <DetailsUserCard
            name={user?.name}
            id={user?.id}
            email={user?.email}
          />
          <LocationList
            locations={locations}
            userEmail={email}
            isError={isError}
            edit={true}
          />
        </>
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Details;
