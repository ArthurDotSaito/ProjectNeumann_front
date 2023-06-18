import useAsync from '../useAsync';
import useToken from '../useToken';
import * as postById from '@/services/postByidApi';

export default function usePostById() {
	const token = useToken();

	const {
		data: postByIdData,
		loading: postByIdLoading,
		error: postByIdError,
		act: postByIdFunction,
	} = useAsync((postId) => postById.getPostById(token, postId), false);

	return { postByIdData, postByIdLoading, postByIdError, postByIdFunction };
}
