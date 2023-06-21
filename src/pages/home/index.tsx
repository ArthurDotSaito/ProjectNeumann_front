import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
	return (
		<div className="flex flex-col py-2 min-h-screen bg-[#17181C] text-white z-negative-2">
			<Header></Header>
			<Footer></Footer>
		</div>
	);
}
