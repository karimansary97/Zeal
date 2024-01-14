import {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import Text from './Text';

type NoDataFoundProps = {};

const NoDataFound: FC<NoDataFoundProps> = () => {
  return (
    <View style={styles.container}>
      <Text bold size="xlarge">
        Not Data Found ...
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

export default NoDataFound;
