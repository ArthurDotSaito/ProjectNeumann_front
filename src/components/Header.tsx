import Link from 'next/link';

import { HeaderButton, HeaderButtonContainer, HeaderContainer } from '@/styles/components_styles/headerStyle';

export default function Header() {
	return (
		<HeaderContainer className="flex flex-col xs:flex-row ">
			<Link href="/" className="flex space-x-2">
				<h1 className="sm:text-3xl text-xl font-bold ml-2 tracking-tight">ProjectNeumann</h1>
			</Link>
			<HeaderButtonContainer className="gap-5">
				<Link href="/register" className="max-w-fit ">
					<HeaderButton>Register</HeaderButton>
				</Link>
				<Link href="/login" className="max-w-fit ">
					<HeaderButton>Sign-in</HeaderButton>
				</Link>
			</HeaderButtonContainer>
		</HeaderContainer>
	);
}
