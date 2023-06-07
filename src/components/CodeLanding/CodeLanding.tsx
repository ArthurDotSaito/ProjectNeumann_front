import { useState } from 'react';
import CodeEditor from '../CodeEditor';

export const languageOptions = [
	{
		id: 63,
		name: 'JavaScript (Node.js 12.14.0)',
		label: 'JavaScript (Node.js 12.14.0)',
		value: 'javascript',
	},
];
export default function CodeLanding() {
	const [code, setCode] = useState('');
	const [theme, setTheme] = useState('cobalt');
	const [language, setLanguage] = useState(languageOptions[0]);

	function onChange(action: string, data: string): void {
		switch (action) {
			case 'code': {
				setCode(data);
				break;
			}
			default: {
				console.warn('case not handled', action, data);
			}
		}
	}

	return (
		<>
			<CodeEditor code={code} theme={theme} language={language?.value} onChange={onChange}></CodeEditor>
		</>
	);
}
