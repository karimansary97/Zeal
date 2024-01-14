import {FC, useState} from 'react';
import {StyleSheet} from 'react-native';
import Layout from '../../components/UIELements/Layout';
import TextInputField from '../../components/UIELements/TextInputField';
import unit from '../../styles/unit';
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import LocationList from '../../components/LocationList';
import EndPoints from '../../apis/EndPoints';
import {useGetQuery} from '../../hooks/useGetQuery';
import LocationsType from '../../types/Locations.type';
import useRoute from '../../hooks/useRoute';
import Button from '../../components/UIELements/Button';
import {errorNotify, successNotify} from '../../helpers/notifers';
import useMutationQuery from '../../hooks/useMutatuinQuery';
import useNavigation from '../../hooks/useNavigation';
import appQueryClient from '../../config/appQueryClient';

type ManageUserProps = {};

const ManageUser: FC<ManageUserProps> = () => {
  const {goBack} = useNavigation();
  const {params} = useRoute();
  const {email = '', name = '', edit = false} = params ?? {};
  const [nameText, setNameText] = useState(name);
  const [emailText, setEmailText] = useState(email);
  const {...methods} = useForm();
  const {data: locationData} = useGetQuery<LocationsType>({
    queryKey: ['locations', email],
    endPoint: `${EndPoints.location}/${email}`,
  });
  const {mutate, isPending} = useMutationQuery({
    endPoint: `${EndPoints.users}/${email}`,
    patch: edit,
    options: {
      onSuccess: () => {
        successNotify('your data is edited ', 'check the users list ');
        successNotify('Your Location remove', 'please Check the locations');
        appQueryClient.refetchQueries({
          queryKey: ['users'],
        });
        goBack();
      },
      onError: () => {
        errorNotify();
      },
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = dataSent => {
    mutate(dataSent);
  };

  return (
    <Layout style={styles.container} HeaderVisablity scrollEnabled={false}>
      <FormProvider {...methods}>
        <TextInputField
          name="name"
          placeholder="Enter your name"
          maxLength={140}
          value={nameText}
          defaultValue={nameText}
          onChangeText={text => {
            setNameText(text);
            methods.setValue('name', text);
          }}
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
          value={emailText}
          defaultValue={emailText}
          maxLength={140}
          onChangeText={text => {
            setEmailText(text);
            methods.setValue('email', text);
          }}
          rules={{
            required: 'Please Enter Your Email ',
            pattern: {
              value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
              message: 'Enter email in right way example:test@test.com',
            },
          }}
          style={styles.textInputField}
        />
        <LocationList
          locations={locationData?.locations}
          userEmail={email}
          edit={edit}
        />

        <Button
          text="Submit"
          loading={isPending}
          style={styles.logInButton}
          disabled={isPending}
          onPress={methods.handleSubmit(onSubmit)}
        />
      </FormProvider>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInputField: {
    marginTop: 20 * unit,
  },
  logInButton: {
    marginVertical: 49 * unit,
    alignSelf: 'center',
  },
});

export default ManageUser;
