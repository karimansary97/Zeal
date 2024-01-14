import {FC} from 'react';
import {
  ActivityIndicator,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import Text from '../Text';
import styles from './Button.style';
import colors from '../../../styles/colors';
import {SvgProps} from 'react-native-svg';

type ButtonType = {
  text?: string;
  size?: 'sm' | 'med' | 'lg';
  loading?: boolean;
  type?: 'bordered' | 'normal';
  color?: 'primary' | 'secondary';
  Icon?: React.FC<SvgProps>;
  indicatorColor?: string;
};

const Button: FC<ButtonType & TouchableOpacityProps> = ({
  text,
  loading = false,
  Icon,
  color = 'primary',
  size = 'lg',
  style,
  indicatorColor = colors.secondary,
  ...props
}) => {
  const targetStyle = [styles.container, styles[color], styles[size], style];

  return (
    <TouchableOpacity
      activeOpacity={0.4}
      style={Icon ? {} : targetStyle}
      {...props}>
      {loading ? (
        <ActivityIndicator size="small" color={indicatorColor} />
      ) : (
        <>
          {text && (
            <Text size="normal" bold style={styles.text} color="white">
              {text}
            </Text>
          )}
          {Icon && <Icon />}
        </>
      )}
    </TouchableOpacity>
  );
};

export default Button;
