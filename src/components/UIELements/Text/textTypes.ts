export type TextColor = 'primary' | 'secondary' | 'white';

export type size =
  | 'small'
  | 'normal'
  | 'medium'
  | 'large'
  | 'xlarge'
  | 'xxlarge';

export type TextType = {
  bold?: boolean;
  semiBold?: boolean;
  text?: string;
  color?: TextColor;
  size?: size;
};
