import useAsync from '../useAsync';

import * as loginApi from '../../services/loginApi';

export default function useSignUp() {
	const { loading: signInLoading, error: signInError, act: signIn } = useAsync(loginApi.signIn, false);

	return {
		signInLoading,
		signInError,
		signIn,
	};
}
