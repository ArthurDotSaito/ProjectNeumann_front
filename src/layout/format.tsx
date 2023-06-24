import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';

interface LayoutProps {
	children: React.ReactNode;
}

export default function format({ children }: LayoutProps) {
	return (
		<>
			<div className="flex flex-col py-2 min-h-screen bg-[#17181C] text-white z-negative-2">
				<Header></Header>
				<main>{children}</main>
				<Footer></Footer>
			</div>
		</>
	);
}
