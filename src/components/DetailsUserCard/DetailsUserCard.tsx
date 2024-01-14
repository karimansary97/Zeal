import {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {ProfileIcon} from '../../styles/icons';
import Text from '../UIELements/Text';
import colors from '../../styles/colors';
import unit from '../../styles/unit';

type DetailsUserCardProps = {
  name?: string;
  id?: number;
  email?: string;
};

const DetailsUserCard: FC<DetailsUserCardProps> = ({name, id, email}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text semiBold size="normal">
          {name} #{id}
        </Text>
        <Text>{email}</Text>
      </View>
      <ProfileIcon />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.lightSmoke,
    padding: 20 * unit,
    borderRadius: 12 * unit,
    marginTop: 18 * unit,
  },
});

export default DetailsUserCard;
