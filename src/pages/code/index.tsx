import React from 'react';
import CodeLanding from '../../components/CodeLanding/CodeLanding';
import Header from '../../components/Header';
import Footer from '@/components/Footer';
import Format from '@/layout/format';

export default function Code() {
	return (
		<Format>
			<div className="flex flex-col py-2 min-h-screen bg-[#17181C] text-white z-negative-2 w-full h-full">
				<CodeLanding></CodeLanding>
			</div>
		</Format>
	);
}
