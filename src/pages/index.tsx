import Image from 'next/image';
import { Inter } from 'next/font/google';
import Home from './home';
import { BlueSpray } from '@/styles/indexStyle';

const inter = Inter({ subsets: ['latin'] });

export default function Index() {
	return (
		<main className="bg-[#17181C] text-white z-negative-2">
			<BlueSpray></BlueSpray>
			<Home></Home>
		</main>
	);
}
