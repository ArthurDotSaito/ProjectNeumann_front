import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { toast, ToastContainer } from 'react-toastify';

import Header from '@/components/Header';
import { Row, Label } from '@/components/Form';
import useLogin from '@/hooks/api/useLogin';
import UserContext from '@/context/UserContext';
import { LoginPageContainer } from '@/styles/pages_styles/loginPageStyle';

export default function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { signInLoading, signIn } = useLogin();
	const { setUserData } = useContext(UserContext);
	const router = useRouter();

	async function submit(event: React.FormEvent) {
		event.preventDefault();
		try {
			const userData = await signIn(email, password);
			setUserData(userData);
			toast('Login realizado com Sucesso!');
			router.push('/dashboard');
		} catch (error) {
			toast('E-mail e/ou senha incorretos!');
		}
	}

	return (
		<LoginPageContainer>
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
		</LoginPageContainer>
	);
}
