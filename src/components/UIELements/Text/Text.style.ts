import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';
import unit from '../../../styles/unit';

export default StyleSheet.create({
  default: {
    textAlign: 'left',
  },
  bold: {
    fontWeight: '700',
  },
  semiBold: {
    fontWeight: '600',
  },

  primary: {
    color: colors.primary,
  },
  secondary: {
    color: colors.secondary,
  },
  white: {color: colors.white},
  small: {
    fontSize: 12 * unit,
    lineHeight: 20 * unit,
  },
  normal: {
    fontSize: 14 * unit,
    lineHeight: 20 * unit,
  },
  medium: {
    fontSize: 16 * unit,
    lineHeight: 20 * unit,
  },
  large: {
    fontSize: 18 * unit,
    lineHeight: 32 * unit,
  },
  xlarge: {
    fontSize: 21 * unit,
    lineHeight: 36 * unit,
  },
  xxlarge: {
    fontSize: 30 * unit,
    lineHeight: 40 * unit,
  },
});
