import { useContext } from 'react';

import UserContext from '../context/UserContext';

export default function useToken() {
	const { userData: user } = useContext(UserContext);
	console.log(user);

	return user?.token ?? '';
}
