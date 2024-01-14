import {Platform, StyleSheet} from 'react-native';
import colors from '../../../styles/colors';
import unit from '../../../styles/unit';

export default StyleSheet.create({
  wrapper: {
    flexGrow: 1,
    backgroundColor: colors.defaultBackGround,
    paddingHorizontal: 20 * unit,
  },
  content: {
    flexGrow: 1,
    paddingTop: Platform.OS === 'android' ? 16 * unit : 0,
  },
});
