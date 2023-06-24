import { w } from 'windstitch';

export default function Footer() {
	return <FooterContainer>Footer do Project Neumann</FooterContainer>;
}

const FooterContainer = w.main(`
    fixed bottom-0 w-full h-10 bg-gray-400 flex items-center justify-center 
`);
