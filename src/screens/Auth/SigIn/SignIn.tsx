import {FC, useState} from 'react';
import {StyleSheet} from 'react-native';
import Layout from '../../../components/UIELements/Layout';
import unit from '../../../styles/unit';
import Text from '../../../components/UIELements/Text';
import {
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
import useNavigation from '../../../hooks/useNavigation';
import routes from '../../../navigation/routes';
import ErrorText from '../../../components/UIELements/ErrorText';

type SignInProps = {};

const SignIn: FC<SignInProps> = () => {
  const {navigate} = useNavigation();
  const {...methods} = useForm();
  const [hasErrorText, setErrorText] = useState(false);
  const {
    mutate,
    error: errorMessage,
    isPending,
  } = useMutationQuery({
    endPoint: EndPoints.SignIn,
    options: {
      onSuccess: (data: any) => {
        appQueryClient.setQueryData(['userInfo'], data?.data?.admin);
        appQueryClient.setQueryData(['Jwt'], data?.data?.token);
      },
      onError: error => {
        if (error?.response?.status !== 401) {
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
  const handleRegisterText = () => {
    methods.reset();
    setErrorText(false);
    navigate(routes.SignUp);
  };
  return (
    <Layout style={styles.container}>
      <Text size="xxlarge" bold>
        Welcome back! Glad to see you, Again!
      </Text>
      <FormProvider {...methods}>
        <TextInputField
          name="email"
          keyboardType="email-address"
          placeholder="Enter your email"
          maxLength={140}
          style={styles.textInputField}
          rules={{
            required: 'Please Enter Your Email ',
          }}
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
        {hasErrorText && (
          <ErrorText message={errorMessage?.response?.data?.error} />
        )}
        <Button
          text="LogIn"
          loading={isPending}
          style={styles.logInButton}
          disabled={isPending}
          onPress={methods.handleSubmit(onSubmit)}
        />

        <Text size="normal">
          Don’t have an account?{' '}
          <Text
            bold
            color="secondary"
            size="normal"
            onPress={handleRegisterText}>
            Register Now
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

export default SignIn;
