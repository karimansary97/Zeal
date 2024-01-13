type UsersType = {
  users: UserDataType[];
};
export type UserDataType = {
  id: number;
  name: string;
  email: string;
  adminId: number;
};

export default UsersType;
