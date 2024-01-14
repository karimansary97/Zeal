import {FC} from 'react';
import {StyleSheet} from 'react-native';
import Layout from '../../components/UIELements/Layout';
import useRoute from '../../hooks/useRoute';
import DetailsUserCard from '../../components/DetailsUserCard';
import LocationList from '../../components/LocationList';
import {useGetQuery} from '../../hooks/useGetQuery';
import EndPoints from '../../apis/EndPoints';
import LocationsType from '../../types/Locations.type';

type DetailsProps = {};

type params = {id: number; name: string; email: string};

const Details: FC<DetailsProps> = () => {
  const {params} = useRoute();
  const {id, name, email}: params = params ?? {};
  const {data: locationData, refetch} = useGetQuery<LocationsType>({
    queryKey: ['locations', email],
    endPoint: `${EndPoints.location}/${email}`,
  });
  return (
    <Layout style={styles.container} HeaderVisablity onRefresh={refetch}>
      <DetailsUserCard name={name} id={id} />
      <LocationList locations={locationData?.locations} userEmail={email} />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Details;
