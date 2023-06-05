import Header from '@/components/Header/Header';

export default function Dashboard() {
	return (
		<div className="flex max-w-6xl mx-auto flex-col py-2 min-h-screen bg-[#17181C] text-white z-negative-2">
			<Header></Header>
			<h1>Dashboard!</h1>
		</div>
	);
}
