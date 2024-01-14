import {FC} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import UserCard from '../UserCard';
import {UserDataType} from '../../types/Users.type';
import routes from '../../navigation/routes';
import useNavigation from '../../hooks/useNavigation';
import unit from '../../styles/unit';
import Text from '../UIELements/Text';
import Button from '../UIELements/Button';
import ErrorHappen from '../UIELements/ErrorHappen';
import NoDataFound from '../UIELements/NoDataFound';

type UserListProps = {
  users?: UserDataType[];
  isError: boolean;
};

const UserList: FC<UserListProps> = ({users, isError}) => {
  const {navigate} = useNavigation();

  const handleonAddUserPress = () => {
    navigate(routes.AddUser, {edite: false});
  };

  const handleUserCardPress = (item: UserDataType) => () => {
    navigate(routes.Details, item);
  };

  if (isError) {
    return <ErrorHappen />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text size="large" bold>
          {users?.length} Users
        </Text>
        <Button size="sm" text="Add User" onPress={handleonAddUserPress} />
      </View>
      {users?.length ? (
        <FlatList
          data={users}
          keyExtractor={item => item?.id + ''}
          renderItem={({item}) => (
            <UserCard
              name={item?.name}
              onPress={handleUserCardPress(item)}
              email={item?.email}
            />
          )}
        />
      ) : (
        <NoDataFound />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12 * unit,
    justifyContent: 'space-between',
  },
});

export default UserList;
