interface AuthValuesTypes {
  token: string | null;
  userId: string | null;
  user: UserTypes | null;
  isLoading: boolean;
}

//User
interface UserTypes {
  _id: string;
  name: string;
  password: string;
  email: string;
  role: string;
  phone: string;
  avatar: string;
  createdAt: Date;
  status: string;
}

interface UsersCounterValuesTypes {
  isLoading: boolean;
  usersCounter: number;
}

interface UsersArgsTypes {
  page?: number;
  search?: string;
  sort?: string;
  limit?: number;
  role?: string;
  status?: string;
}

interface UsersValuesTypes {
  isLoading: boolean;
  users: UserTypes[] | null;
}

interface RecentUsersArgsTypes {
  limit?: number;
}

interface RecentUsersValuesTypes {
  isLoading: boolean;
  recentUsers: UserTypes[] | null;
}

interface UserValuesTypes {
  isLoading: boolean;
  user: UserTypes | null;
}
//User

export type {
  AuthValuesTypes,
  RecentUsersArgsTypes,
  RecentUsersValuesTypes,
  UserTypes,
  UserValuesTypes,
  UsersArgsTypes,
  UsersCounterValuesTypes,
  UsersValuesTypes,
};
