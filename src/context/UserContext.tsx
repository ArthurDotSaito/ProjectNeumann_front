import { createContext, ReactNode } from 'react';

import useLocalStorage from '../hooks/useLocalStorage';

type UserData = {
	token: string;
};

type UserContextType = {
	userData: UserData | null;
	setUserData: (data: UserData | null) => void;
	logout: () => void;
};

const UserContext = createContext<UserContextType>({ userData: null, setUserData: () => {}, logout: () => {} });
export default UserContext;

type UserProviderProps = {
	children: ReactNode;
};

export function UserProvider({ children }: UserProviderProps) {
	const [userData, setUserData] = useLocalStorage('userData', null);

	const logout = () => {
		setUserData(null);
	};

	return <UserContext.Provider value={{ userData, setUserData, logout }}>{children}</UserContext.Provider>;
}
