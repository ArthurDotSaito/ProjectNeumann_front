import useAsync from '../useAsync';
import useToken from '../useToken';
import * as postApi from '@/services/postsApi';

export default function usePosts() {
	const token = useToken();

	const { data: postsData, loading: postsLoading, error: postsError, act: postsFunction } = useAsync(() => postApi.getAllPosts(token));

	return { postsData, postsLoading, postsError, postsFunction };
}
