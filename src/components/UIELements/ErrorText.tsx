import {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import unit from '../../styles/unit';
import Text from './Text';
import colors from '../../styles/colors';

type ErrorTextProps = {
  message?: string;
};

const ErrorText: FC<ErrorTextProps> = ({message}) => {
  return (
    <View style={styles.container}>
      {message && <Text style={styles.text}>{message}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 6 * unit,
  },
  text: {
    color: colors.danger,
    fontSize: 14 * unit,
  },
});

export default ErrorText;
