import Link from 'next/link';
import { useContext } from 'react';
import { useRouter } from 'next/router';

import { HeaderButton, HeaderButtonContainer, HeaderContainer } from '@/styles/components_styles/headerStyle';
import UserContext from '@/context/UserContext';

export default function Header() {
	const { userData, logout } = useContext(UserContext);
	const router = useRouter();

	const handleLogout = () => {
		logout();
		router.push('/home');
	};

	const handlePostsClick = () => {
		router.push('/posts');
	};

	const handleProblemsClick = () => {
		router.push('/problems');
	};

	const handleRegisterClick = () => {
		router.push('/register');
	};

	const handleSignInClick = () => {
		router.push('/login');
	};

	return (
		<HeaderContainer className="flex flex-col xs:flex-row">
			<Link href="/" passHref className="flex space-x-2">
				<h1 className="sm:text-3xl text-xl font-bold ml-2 tracking-tight">ProjectNeumann</h1>
			</Link>
			<HeaderButtonContainer className="gap-5">
				{userData ? (
					<>
						<HeaderButton onClick={handlePostsClick}>Posts</HeaderButton>
						<HeaderButton onClick={handleProblemsClick}>Problemas</HeaderButton>
						<HeaderButton onClick={handleLogout}>Logout</HeaderButton>
					</>
				) : (
					<>
						<HeaderButton onClick={handleRegisterClick}>Register</HeaderButton>
						<HeaderButton onClick={handleSignInClick}>Sign-in</HeaderButton>
					</>
				)}
			</HeaderButtonContainer>
		</HeaderContainer>
	);
}
