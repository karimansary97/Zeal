import React, {FC} from 'react';
import {StyleSheet, View, Text} from 'react-native';

type TestingProps = {};

const Testing: FC<TestingProps> = props => {
  return (
    <View style={styles.container}>
      <Text>New Screen Testing </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Testing;
