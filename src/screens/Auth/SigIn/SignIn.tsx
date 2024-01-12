import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import Layout from '../../../components/UIELements/Layout';
import unit from '../../../styles/unit';
import Text from '../../../components/UIELements/Text';

type SignInProps = {};

const SignIn: FC<SignInProps> = props => {
  return (
    <Layout style={styles.container}>
      <Text size="xxlarge" bold>
        Welcome back! Glad to see you, Again!
      </Text>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 42 * unit,
  },
});

export default SignIn;
