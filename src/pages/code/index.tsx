import React from 'react';
import CodeLanding from '../../components/CodeLanding/CodeLanding';
import Header from '../../components/Header';
import Footer from '@/components/Footer';

export default function Code() {
	return (
		<div className="flex flex-col py-2 min-h-screen bg-[#17181C] text-white z-negative-2 w-full h-full">
			<Header></Header>
			<CodeLanding></CodeLanding>
			<Footer></Footer>
		</div>
	);
}
