import React from 'react';
import CodeLanding from '../../components/CodeLanding/CodeLanding';
import Header from '../../components/Header';

export default function Code() {
	return (
		<div className="flex flex-col py-2 min-h-screen bg-[#17181C] text-white z-negative-2">
			<Header></Header>
			<CodeLanding></CodeLanding>
		</div>
	);
}