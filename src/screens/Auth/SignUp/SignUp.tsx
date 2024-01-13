import React, {FC} from 'react';
import {StyleSheet, View, Text} from 'react-native';

type SignUpProps = {};

const SignUp: FC<SignUpProps> = props => {
  return (
    <View style={styles.container}>
      <Text>New Screen SignUp </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SignUp;
