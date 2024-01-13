import {FC, useState} from 'react';
import {
  StyleSheet,
  View,
  TextInputProps,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  useController,
  useFormContext,
  UseControllerProps,
} from 'react-hook-form';
import colors from '../../../styles/colors';
import unit from '../../../styles/unit';
import ErrorText from '../ErrorText';
import {PasswordEyeIcon, PasswordOpenIcon} from '../../../styles/icons';

interface ControlledInputProps extends UseControllerProps, TextInputProps {
  defaultValue?: string;
  password?: boolean;
}

const ControlledInput: FC<ControlledInputProps> = ({
  name,
  rules,
  defaultValue,
  password = false,
  style = {},
  ...inputProps
}) => {
  const formContext = useFormContext();
  const {formState} = formContext;
  const hasError = Boolean(formState?.errors[name]);
  const {field} = useController({name, rules, defaultValue});
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(password);
  return (
    <View style={style}>
      <View
        style={[
          styles.continer,
          hasError ? styles.erorrInput : styles.defaultInputBorderColor,
          isFocused ? styles.foucs : styles.unfoucs,
        ]}>
        <TextInput
          style={[styles.input]}
          selectionColor={colors.secondary}
          secureTextEntry={showPassword}
          onChangeText={field.onChange}
          onBlur={() => {
            field.onBlur();
            setIsFocused(false);
          }}
          onFocus={() => setIsFocused(true)}
          value={field.value}
          placeholderTextColor={colors.heavySmoke}
          {...inputProps}
        />
        {password && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            {showPassword ? <PasswordEyeIcon /> : <PasswordOpenIcon />}
          </TouchableOpacity>
        )}
      </View>
      {hasError && (
        <ErrorText message={formState.errors[name]?.message as string} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  continer: {
    flexDirection: 'row',
    backgroundColor: colors.lightSmoke,
    paddingHorizontal: 20 * unit,
    alignItems: 'center',
    borderRadius: 12 * unit,
    width: '100%',
  },
  input: {
    flex: 1,
    paddingVertical: 20 * unit,
  },
  erorrInput: {
    borderWidth: 1,
    borderColor: colors.danger,
  },
  defaultInputBorderColor: {
    borderColor: colors.secondary,
  },
  foucs: {
    borderWidth: 0.5,
  },
  unfoucs: {
    borderWidth: 0,
  },
});

export default ControlledInput;
