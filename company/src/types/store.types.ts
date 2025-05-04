import { CompanyTypes, UserTypes } from "./app.types";

interface AuthValuesTypes {
  token: string | null;
  user: UserTypes | null;
  company: string | null;
  isLoading: boolean;
}

interface ProfileValuesTypes {
  loading: boolean;
  profile?: CompanyTypes;
}

//User

//User

export type { AuthValuesTypes, ProfileValuesTypes };
