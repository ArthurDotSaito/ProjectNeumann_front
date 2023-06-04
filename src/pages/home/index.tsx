import Header from '@/components/Header/Header';
import { HomepageContainer } from '@/styles/indexStyle';

export default function Home() {
	return (
		<div className="flex max-w-6xl mx-auto flex-col py-2 min-h-screen bg-[#17181C] text-white z-negative-2">
			<Header></Header>
			<HomepageContainer></HomepageContainer>
		</div>
	);
}
