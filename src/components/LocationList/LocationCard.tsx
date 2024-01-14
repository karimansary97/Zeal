import {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import Text from '../UIELements/Text';
import colors from '../../styles/colors';
import unit from '../../styles/unit';
import {TrashIcon} from '../../styles/icons';
import Button from '../UIELements/Button';
import useMutationQuery from '../../hooks/useMutatuinQuery';
import EndPoints from '../../apis/EndPoints';
import appQueryClient from '../../config/appQueryClient';
import {errorNotify, successNotify} from '../../helpers/notifers';
import useTempLocationStore from '../../hooks/useZsutandsStore';

type LocationCardProps = {
  lat: string;
  lng: string;
  id: number;
  edit?: boolean;
};

const LocationCard: FC<LocationCardProps> = ({lat, lng, id, edit}) => {
  const {removeItem} = useTempLocationStore();

  const {mutate, isPending} = useMutationQuery({
    endPoint: `${EndPoints.location}/${id}`,
    deleteData: true,
    options: {
      onSuccess: () => {
        successNotify('Your Location remove', 'please Check the locations');
        appQueryClient.refetchQueries({
          queryKey: ['singleUser'],
        });
      },
      onError: () => {
        errorNotify();
      },
    },
  });
  const handleDelete = () => {
    if (!edit) {
      return removeItem(id);
    }
    mutate({});
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text bold size="large">
          lat:{lat} /{' '}
        </Text>
        <Text bold size="large">
          lng:{lng}
        </Text>
      </View>
      <Button
        Icon={TrashIcon}
        onPress={handleDelete}
        loading={isPending}
        disabled={isPending}
        indicatorColor={colors.secondary}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.lightSmoke,
    justifyContent: 'space-between',
    padding: 20 * unit,
    borderRadius: 12 * unit,
    marginTop: 18 * unit,
  },
  subContainer: {
    flexDirection: 'row',
  },
});

export default LocationCard;
