import {FC} from 'react';
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
import Button from '../../components/UIELements/Button';
import useMutationQuery from '../../hooks/useMutatuinQuery';
import EndPoints from '../../apis/EndPoints';
import {errorNotify, successNotify} from '../../helpers/notifers';
import useRoute from '../../hooks/useRoute';
import useNavigation from '../../hooks/useNavigation';
import appQueryClient from '../../config/appQueryClient';
import useTempLocationStore from '../../hooks/useZsutandsStore';

type LocationProps = {};

const Location: FC<LocationProps> = () => {
  const {goBack} = useNavigation();
  const {params} = useRoute();
  const {edit = true, userEmail} = params;
  const {addItem} = useTempLocationStore();
  const {...methods} = useForm();
  const {mutate, isPending} = useMutationQuery({
    endPoint: `${EndPoints.location}/${userEmail}`,
    options: {
      onSuccess: () => {
        successNotify('Your Location add', 'please Check the locations');
        appQueryClient.refetchQueries({
          queryKey: ['singleUser', userEmail],
        });
        goBack();
      },
      onError: () => {
        errorNotify();
      },
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = dataSent => {
    if (!edit) {
      addItem(dataSent);
      return goBack();
    }
    mutate(dataSent);
  };
  return (
    <Layout style={styles.container} HeaderVisablity>
      <FormProvider {...methods}>
        <TextInputField
          name="lat"
          placeholder="Enter your latitude"
          keyboardType="number-pad"
          maxLength={140}
          style={styles.textInputField}
          rules={{
            required: 'Please Enter latitude ',
          }}
        />
        <TextInputField
          name="lng"
          placeholder="Enter your longitude"
          keyboardType="number-pad"
          maxLength={140}
          style={styles.textInputField}
          rules={{
            required: 'Please Enter longitude ',
          }}
        />
        <Button
          text="Submit"
          loading={isPending}
          disabled={isPending}
          size="lg"
          style={styles.logInButton}
          onPress={methods.handleSubmit(onSubmit)}
        />
      </FormProvider>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  textInputField: {
    marginTop: 20 * unit,
  },
  logInButton: {
    marginVertical: 49 * unit,
  },
});

export default Location;
