import React, {FC} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Layout from '../components/UIELements/Layout';

type TestingProps = {};

const Testing: FC<TestingProps> = props => {
  return (
    <Layout>
      <Text>kareem</Text>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Testing;
