import {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import Text from './Text';

type ErrorHappenProps = {};

const ErrorHappen: FC<ErrorHappenProps> = () => {
  return (
    <View style={styles.container}>
      <Text bold size="xlarge">
        Error Happen...
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ErrorHappen;
