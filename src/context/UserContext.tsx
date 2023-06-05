import { createContext, ReactNode } from 'react';

import useLocalStorage from '../hooks/useLocalStorage';

type UserData = {
	token: string;
};

type UserContextType = {
	userData: UserData | null;
	setUserData: (data: UserData | null) => void;
};

const UserContext = createContext<UserContextType>({ userData: null, setUserData: () => {} });
export default UserContext;

type UserProviderProps = {
	children: ReactNode;
};

export function UserProvider({ children }: UserProviderProps) {
	const [userData, setUserData] = useLocalStorage('userData', null);

	return <UserContext.Provider value={{ userData, setUserData }}>{children}</UserContext.Provider>;
}
