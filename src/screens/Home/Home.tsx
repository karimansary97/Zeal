import {FC} from 'react';
import {StyleSheet, Text} from 'react-native';
import Layout from '../../components/UIELements/Layout';
import useUser from '../../hooks/useUser';

type HomeProps = {};

const Home: FC<HomeProps> = () => {
  const x = useUser();
  console.log('🚀 ~ x:', x);
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
