import { submitCode } from '@/services/submissionApi';
import useAsync from '../useAsync';
import useToken from '../useToken';

export default function useSubmit() {
	const token = useToken();

	const {
		data: newSubmitCode,
		loading: submitLoading,
		error: submitError,
		act: submitNewCode,
	} = useAsync((codeData) => submitCode(token, codeData), false);

	return { newSubmitCode, submitLoading, submitError, submitNewCode };
}
