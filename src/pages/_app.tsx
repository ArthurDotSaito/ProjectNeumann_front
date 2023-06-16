import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import { BlueSprayBackground } from '@/styles/indexStyle';
import { UserProvider } from '@/context/UserContext';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<UserProvider>
				<BlueSprayBackground>
					<Component {...pageProps} />
				</BlueSprayBackground>
			</UserProvider>
		</>
	);
}
