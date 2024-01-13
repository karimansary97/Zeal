import {FC} from 'react';
import {StyleSheet, Text} from 'react-native';
import Layout from '../../components/UIELements/Layout';
import appQueryClient from '../../config/appQueryClient';

type HomeProps = {};

const Home: FC<HomeProps> = () => {
  // appQueryClient.clear();
  return (
    <Layout style={styles.container}>
      <Text>New Screen Home </Text>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
