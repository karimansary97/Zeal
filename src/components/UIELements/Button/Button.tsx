import React, {FC, useMemo} from 'react';
import {
  ActivityIndicator,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import Text from '../Text';
import styles from './Button.style';
import colors from '../../../styles/colors';

type ButtonType = {
  text: string;
  size?: 'sm' | 'med' | 'lg';
  fullWidth?: boolean;
  minWidth?: boolean;
  loading?: boolean;
  type?: 'bordered' | 'normal';
  color?: 'primary' | 'secondary';
};

const Button: FC<ButtonType & TouchableOpacityProps> = ({
  text,
  fullWidth = true,
  loading = false,
  color = 'primary',
  size = 'lg',
  style,
  ...props
}) => {
  const targetStyle = [styles.container, styles[color], styles[size], style];

  return (
    <TouchableOpacity activeOpacity={0.4} style={targetStyle} {...props}>
      {loading ? (
        <ActivityIndicator size="small" color={colors.white} />
      ) : (
        <Text size="normal" bold style={styles.text} color="white">
          {text}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
