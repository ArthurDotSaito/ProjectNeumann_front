import Header from '@/components/Header/Header';
import { HomepageContainer } from '@/styles/indexStyle';
import { useState } from 'react';

export default function Register() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	return (
		<div className="flex max-w-6xl mx-auto flex-col py-2 min-h-screen bg-[#17181C] text-white z-negative-2">
			<Header></Header>
			<h1>Register</h1>
		</div>
	);
}
