import {StyleSheet} from 'react-native';
import unit from '../../../styles/unit';
import colors from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20 * unit,
    borderRadius: 12 * unit,
  },
  primary: {
    backgroundColor: colors.primary,
  },
  secondary: {
    backgroundColor: colors.secondary,
  },

  lg: {
    height: 56 * unit,
    width: 262 * unit,
    paddingHorizontal: 20 * unit,
  },
  med: {
    height: 50 * unit,
    width: 242 * unit,
    paddingHorizontal: 16 * unit,
  },
  sm: {
    height: 40 * unit,
    width: 160 * unit,
    paddingHorizontal: 12 * unit,
  },
  text: {
    marginBottom: 2 * unit,
  },
});
