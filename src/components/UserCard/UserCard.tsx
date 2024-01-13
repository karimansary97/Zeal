import {FC} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {EditIcon, ProfileIcon, TrashIcon} from '../../styles/icons';
import colors from '../../styles/colors';
import unit from '../../styles/unit';
import Text from '../UIELements/Text';

type UserCardProps = {
  name: string;
  onPress?: () => void;
};

const UserCard: FC<UserCardProps> = ({name, onPress}) => {
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
      <EditIcon />
      <TrashIcon />
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

export default UserCard;
