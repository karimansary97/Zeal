import {FC} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {BackButtonIcon} from '../../../styles/icons';
import Text from '../Text';
import useRoute from '../../../hooks/useRoute';
import useNavigation from '../../../hooks/useNavigation';
import unit from '../../../styles/unit';

type HeaderProps = {};

const Header: FC<HeaderProps> = () => {
  const {name} = useRoute();
  const {goBack, canGoBack} = useNavigation();

  const handleGoBack = () => {
    if (canGoBack()) {
      goBack();
    }
  };
  return (
    <View style={styles.container}>
      <Pressable onPress={handleGoBack}>
        <BackButtonIcon />
      </Pressable>
      <Text size="xlarge" bold>
        {name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 22 * unit,
    alignSelf: 'flex-start',
  },
});

export default Header;
