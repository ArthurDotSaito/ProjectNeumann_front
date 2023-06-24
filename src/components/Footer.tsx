import { w } from 'windstitch';
import Link from 'next/link';
import { IoLogoGithub } from 'react-icons/io5';

export default function Footer() {
	return (
		<FooterContainer>
			<div className="container mx-auto flex justify-center py-12">
				<div className="py-5">
					<div className="flex gap-6 justify-center">
						<Link href="/">
							<IoLogoGithub></IoLogoGithub>
						</Link>
					</div>
					<p className="py-5">Copyrigth ©2023 All rights reserved | Site made by ArthurDotSaito </p>
					<p>Terms & Condition</p>
				</div>
			</div>
		</FooterContainer>
	);
}

const FooterContainer = w.footer(`
     flex-grow w-full bottom-0 left-0 flex items-end justify-center 
`);
