import { Html, Head, Main, NextScript } from 'next/document';

export const metadata = {
	title: 'Project Neumann',
	description: 'General code stuff and practice. Created by Arthur Saito',
};

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<title>{metadata.title}</title>
				<meta name="description" content={metadata.description} />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
