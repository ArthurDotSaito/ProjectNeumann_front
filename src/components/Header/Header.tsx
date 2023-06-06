import Link from 'next/link';

import { HeaderButton, HeaderButtonContainer, HeaderContainer } from '@/styles/components_styles/headerStyle';

export default function Header() {
	return (
		<HeaderContainer>
			<Link href="/" className="flex space-x-2">
				<h1 className="sm:text-3xl text-xl font-bold ml-2 tracking-tight">ProjectNeumann</h1>
			</Link>
			<HeaderButtonContainer className="gap-5">
				<Link href="/register">
					<HeaderButton>Register</HeaderButton>
				</Link>
				<Link href="/login">
					<HeaderButton>Sign-in</HeaderButton>
				</Link>
			</HeaderButtonContainer>
		</HeaderContainer>
	);
}
