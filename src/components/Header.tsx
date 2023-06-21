import Link from 'next/link';
import { useContext } from 'react';
import { useRouter } from 'next/router';
import { w } from 'windstitch';

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
		router.push('/code');
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
						<HeaderButton onClick={handleProblemsClick}>Code</HeaderButton>
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

const HeaderContainer = w.header(
	`
        flex 
        flex-col 
        xs:flex-row 
        justify-between 
        items-center 
        w-full 
        mt-3 
        border-b 
        pb-7 
        sm:px-4 
        px-2 
        border-gray-500 
        gap-2
    `,
);

const HeaderButtonContainer = w.section(
	`
        flex
        flex-col xs:flex-row
        max-w-fit 
        items-center 
        justify-center 
    `,
);

const HeaderButton = w.button(
	`
        flex 
        max-w-fit 
        items-center 
        justify-center 
        space-x-2 
        rounded-full 
        border 
        rounded
        border-blue-600 
        text-white 
        px-14
        py-2
        text-lg 
        shadow-md 
        hover:bg-blue-500
        bg-blue-600
        font-medium transition
        sm: text-base
        md: text-lg
    `,
);
