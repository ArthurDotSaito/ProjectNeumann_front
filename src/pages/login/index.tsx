import Header from '@/components/Header/Header';
import { toast, ToastContainer } from 'react-toastify';
import { Row, Label } from '@/components/Form';
import Link from 'next/link';
import { useState } from 'react';
import useLogin from '@/hooks/api/useLogin';
import { BlueSpray } from '@/styles/indexStyle';

export default function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { signInLoading, signIn } = useLogin();

	async function submit(event: React.FormEvent) {
		event.preventDefault();
		try {
			await signIn(email, password);
			toast('Login realizado com Sucesso!');
		} catch (error) {
			toast('E-mail e/ou senha incorretos!');
		}
	}

	return (
		<div className="flex max-w-6xl mx-auto flex-col py-2 min-h-screen bg-[#17181C] text-white z-negative-2">
			<BlueSpray></BlueSpray>
			<Header></Header>
			<Row>
				<Label>Sign In</Label>
				<form onSubmit={submit}>
					<div className="mb-4">
						<label htmlFor="email" className="block mb-1">
							E-mail
						</label>
						<input
							id="email"
							type="text"
							className="w-full px-2 py-1 bg-gray-800 text-white border border-gray-600 rounded"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className="mb-4">
						<label htmlFor="password" className="block mb-1">
							Password
						</label>
						<input
							id="password"
							type="password"
							className="w-full px-2 py-1 bg-gray-800 text-white border border-gray-600 rounded"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400" disabled={signInLoading}>
						Sign Up
					</button>
				</form>
			</Row>
			<Row>
				<Link href="/register">Don't have an account? Click here</Link>
			</Row>
		</div>
	);
}
