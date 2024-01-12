import React, {FC} from 'react';
import {Text as NativeText, TextProps} from 'react-native';
import {TextType} from './textTypes';
import styles from './Text.style';

const Text: FC<TextType & TextProps> = ({
  children,
  style,
  bold = false,
  color = 'primary',
  size = 'small',
  semiBold = false,
  ...props
}) => {
  const targetStyle = [
    styles.default,
    bold ? styles.bold : {},
    semiBold ? styles.semiBold : {},
    styles[color],
    styles[size],
    style,
  ];

  return (
    <NativeText {...props} style={targetStyle}>
      {children}
    </NativeText>
  );
};

export default Text;
