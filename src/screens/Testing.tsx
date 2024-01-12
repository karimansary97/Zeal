import React, {FC} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Test} from '../styles/icons';

type TestingProps = {};

const Testing: FC<TestingProps> = props => {
  return (
    <View style={styles.container}>
      <Test />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Testing;
