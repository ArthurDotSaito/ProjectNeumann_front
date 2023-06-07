import { useState } from 'react';
import CodeEditor from '../CodeEditor';

import { languageOptions } from '@/constants/languageOptions';
import { CodeLandingContainer } from '@/styles/components_styles/codeLandingStyle';

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
			<CodeLandingContainer>
				<CodeEditor code={code} theme={theme} language={language?.value} onChange={onChange}></CodeEditor>
			</CodeLandingContainer>
		</>
	);
}
