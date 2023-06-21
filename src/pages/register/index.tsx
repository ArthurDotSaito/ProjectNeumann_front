import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { toast } from 'react-toastify';

import { Row, Label } from '@/components/Form';
import useRegistration from '@/hooks/api/useRegistration';
import Header from '@/components/Header';
import { RegisterPageContainer } from '@/styles/pages_styles/registerPageStyle';
import Footer from '@/components/Footer';

export default function Register() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const router = useRouter();
	const { registrationLoading, signUp } = useRegistration();

	async function submit(event: React.FormEvent) {
		event.preventDefault();

		if (password !== confirmPassword) {
			toast('As senhas devem ser iguais!');
		} else {
			try {
				await signUp(email, password);
				toast('Inscrito com sucesso! Por favor, faça login.');
				router.push('/login');
			} catch (error) {
				toast('Não foi possível fazer o cadastro!');
			}
		}
	}

	return (
		<RegisterPageContainer>
			<Header></Header>
			<Row>
				<Label>Sign Up</Label>
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
					<div className="mb-4">
						<label htmlFor="confirmPassword" className="block mb-1">
							Confirm Password
						</label>
						<input
							id="confirmPassword"
							type="password"
							className="w-full px-2 py-1 bg-gray-800 text-white border border-gray-600 rounded"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
						/>
					</div>
					<button
						type="submit"
						className="w-full px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
						disabled={registrationLoading}
					>
						Sign Up
					</button>
				</form>
			</Row>
			<Row>
				<Link href="/login">Already registered? Click here</Link>
			</Row>
			<Footer></Footer>
		</RegisterPageContainer>
	);
}
