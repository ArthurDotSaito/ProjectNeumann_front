import type { AppProps } from 'next/app';

import '@/styles/globals.css';
import { BlueSprayBackground } from '@/styles/indexStyle';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<BlueSprayBackground>
				<Component {...pageProps} />
			</BlueSprayBackground>
		</>
	);
}
