import {FC} from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import colors from '../../styles/colors';

type LoadingProps = {};

const Loading: FC<LoadingProps> = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="small" color={colors.secondary} />
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

export default Loading;
