import {FC} from 'react';
import {StyleSheet, Text} from 'react-native';
import Layout from '../../components/UIELements/Layout';

type DetailsProps = {};

const Details: FC<DetailsProps> = () => {
  return (
    <Layout style={styles.container} HeaderVisablity>
      <Text>New Screen Details </Text>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Details;
