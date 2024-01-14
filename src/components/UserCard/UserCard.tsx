import {FC, memo} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {EditIcon, ProfileIcon, TrashIcon} from '../../styles/icons';
import colors from '../../styles/colors';
import unit from '../../styles/unit';
import Text from '../UIELements/Text';
import Button from '../UIELements/Button';
import useMutationQuery from '../../hooks/useMutatuinQuery';
import EndPoints from '../../apis/EndPoints';
import {errorNotify, successNotify} from '../../helpers/notifers';
import appQueryClient from '../../config/appQueryClient';
import useNavigation from '../../hooks/useNavigation';
import routes from '../../navigation/routes';

type UserCardProps = {
  name: string;
  onPress?: () => void;
  email: string;
};

const UserCard: FC<UserCardProps> = ({name, onPress, email}) => {
  const {navigate} = useNavigation();

  const {mutate, isPending} = useMutationQuery({
    endPoint: `${EndPoints.users}/${email}`,
    deleteData: true,
    options: {
      onSuccess: () => {
        successNotify('Your Location remove', 'please Check the locations');
        appQueryClient.refetchQueries({
          queryKey: ['users'],
        });
      },
      onError: () => {
        errorNotify();
      },
    },
  });

  const handleOnDeletePress = () => {
    mutate({});
  };

  const handleOnEditPress = () => {
    navigate(routes.EditUser, {email, name, edit: true});
  };

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={onPress}>
      <ProfileIcon />
      <View>
        <Text semiBold size="normal">
          {name}
        </Text>
        <Text>Jorem ipsum dolor, consectetur.</Text>
      </View>
      <Button
        Icon={EditIcon}
        disabled={isPending}
        onPress={handleOnEditPress}
      />
      <Button
        Icon={TrashIcon}
        disabled={isPending}
        onPress={handleOnDeletePress}
        loading={isPending}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.lightSmoke,
    padding: 20 * unit,
    borderRadius: 12 * unit,
    marginTop: 18 * unit,
    columnGap: 24 * unit,
  },
});

export default memo(UserCard);
