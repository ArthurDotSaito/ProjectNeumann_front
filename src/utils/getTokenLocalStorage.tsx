export function getAccessToken() {
	try {
		const storedUserData = window.localStorage.getItem('userData');
		const userData = storedUserData ? JSON.parse(storedUserData) : null;
		return userData?.token || '';
	} catch (error) {
		console.log(error);
		return '';
	}
}
