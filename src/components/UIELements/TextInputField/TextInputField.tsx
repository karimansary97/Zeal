import {FC} from 'react';
import {TextInputProps} from 'react-native';
import {UseControllerProps} from 'react-hook-form';
import ControlledInput from './ControlledInput';

type TextInputFieldProps = UseControllerProps &
  TextInputProps & {
    defaultValue?: string;
    password?: boolean;
  };

const TextInputField: FC<TextInputFieldProps> = props => {
  return <ControlledInput {...props} />;
};

export default TextInputField;
