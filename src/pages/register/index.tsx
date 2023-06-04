import Header from '@/components/Header/Header';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { HomepageContainer } from '@/styles/indexStyle';
import { useState } from 'react';

export default function Register() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const router = useRouter();

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
		<div className="flex max-w-6xl mx-auto flex-col py-2 min-h-screen bg-[#17181C] text-white z-negative-2">
			<Header></Header>
			<h1>Register</h1>
		</div>
	);
}
