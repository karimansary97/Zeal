import {LocationDataType} from './Locations.type';
import {UserDataType} from './Users.type';

type SingleUserType = {
  user: UserDataType;
  locations: LocationDataType[];
};

export default SingleUserType;
