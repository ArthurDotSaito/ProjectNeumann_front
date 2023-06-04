import useAsync from '../useAsync';

import * as RegistrationApi from '../../services/registrationApi';

export default function useRegistration() {
	const { loading: registrationLoading, error: registrationError, act: signUp } = useAsync(RegistrationApi.signUp, false);

	return {
		registrationLoading,
		registrationError,
		signUp,
	};
}
