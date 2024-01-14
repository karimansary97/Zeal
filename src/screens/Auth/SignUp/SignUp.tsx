import {FC, useState} from 'react';
import {StyleSheet} from 'react-native';
import Layout from '../../../components/UIELements/Layout';
import unit from '../../../styles/unit';
import Text from '../../../components/UIELements/Text';
import {
  FieldValue,
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import TextInputField from '../../../components/UIELements/TextInputField';
import Button from '../../../components/UIELements/Button/Button';
import useMutationQuery from '../../../hooks/useMutatuinQuery';
import EndPoints from '../../../apis/EndPoints';
import appQueryClient from '../../../config/appQueryClient';
import {errorNotify} from '../../../helpers/notifers';
import ErrorText from '../../../components/UIELements/ErrorText';
import useNavigation from '../../../hooks/useNavigation';

type SignUpProps = {};

const SignUp: FC<SignUpProps> = () => {
  const {goBack} = useNavigation();

  const {...methods} = useForm();
  const [hasErrorText, setErrorText] = useState(false);

  const {
    mutate,
    error: errorMessage,
    isPending,
  } = useMutationQuery({
    endPoint: EndPoints.SignUp,
    options: {
      onSuccess: (data: any) => {
        appQueryClient.setQueryData(['userInfo'], data?.data?.admin);
        appQueryClient.setQueryData(['Jwt'], data?.data?.token);
        methods.reset();
      },
      onError: error => {
        if (error?.response?.status !== 400) {
          errorNotify();
          return;
        }
        setErrorText(true);
      },
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = dataSent => {
    mutate(dataSent);
  };
  const handleLogInText = () => {
    goBack();
  };

  return (
    <Layout style={styles.container}>
      <Text size="xxlarge" bold>
        Welcome ! Sign up your new account now.
      </Text>
      <FormProvider {...methods}>
        <TextInputField
          name="name"
          placeholder="Enter your name"
          maxLength={140}
          style={styles.textInputField}
          rules={{
            required: 'Please Enter Your Name ',
            minLength: {
              value: 3,
              message: 'Name Should more than 3 character',
            },
            pattern: {
              value:
                /^[^\u0660-\u0669\u06F0-\u06F9\d!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]*$/,
              message: 'Name should not contain numbers or special character',
            },
          }}
        />
        <TextInputField
          name="email"
          keyboardType="email-address"
          placeholder="Enter your email"
          maxLength={140}
          rules={{
            required: 'Please Enter Your Email ',
            pattern: {
              value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
              message: 'Enter email in right way example:test@test.com',
            },
          }}
          style={styles.textInputField}
        />
        <TextInputField
          name="password"
          placeholder="Enter your password "
          maxLength={140}
          password
          style={styles.textInputField}
          rules={{
            required: 'Please Enter Your Password ',
          }}
        />
        <TextInputField
          name="passwordrepeat"
          placeholder="Enter your password again"
          maxLength={140}
          password
          style={styles.textInputField}
          rules={{
            required: 'Please Enter Your Password ',
            validate: (value: FieldValue<FieldValues>) => {
              let pass = methods.getValues('password');
              return (
                value === pass || "password doesn't match please try agian  "
              );
            },
          }}
        />
        {hasErrorText && <ErrorText message={errorMessage?.response?.data} />}
        <Button
          text="Register"
          loading={isPending}
          style={styles.logInButton}
          disabled={isPending}
          onPress={methods.handleSubmit(onSubmit)}
        />
        <Text size="normal">
          have an account?{' '}
          <Text bold color="secondary" size="normal" onPress={handleLogInText}>
            LogIn Now
          </Text>
        </Text>
      </FormProvider>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40 * unit,
    alignItems: 'center',
  },
  logInButton: {
    marginVertical: 49 * unit,
  },
  textInputField: {
    marginTop: 20 * unit,
  },
});

export default SignUp;
