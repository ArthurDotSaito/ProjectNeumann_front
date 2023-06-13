import { useEffect, useState } from 'react';
import CodeEditor from '../CodeEditor';

import { languageOptions } from '@/constants/languageOptions';
import { CodeLandingContainer } from '@/styles/components_styles/codeLandingStyle';
import LanguagesDropdown from './LanguagesDropdown';
import ThemeDropdown from './ThemeDropdown';
import defineTheme from '@/libraries/codeEditorThemes';
import { SelectedOption } from '@/utils/protocols';
import OutputTerminal from './OutputTerminal';

export default function CodeLanding() {
	const [code, setCode] = useState('');
	const [theme, setTheme] = useState<{ value: string; label: string }>({ value: 'cobalt', label: 'Cobalt' });
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

	function onSelectChange(selectedOption: SelectedOption) {
		console.log(selectedOption);
		setLanguage(selectedOption);
	}

	function changeTheme(selectedTheme: any) {
		if (['light', 'vs-dark'].includes(selectedTheme.value)) {
			console.log(selectedTheme);
			setTheme(selectedTheme);
		} else {
			defineTheme(selectedTheme.value).then((e) => setTheme(selectedTheme));
		}
	}

	useEffect(() => {
		defineTheme('oceanic-next').then((_) => setTheme({ value: 'oceanic-next', label: 'Oceanic Next' }));
	}, []);

	return (
		<>
			<CodeLandingContainer>
				<section className="flex flex-col xs:flex-row">
					<LanguagesDropdown onSelectChange={onSelectChange}></LanguagesDropdown>
					<ThemeDropdown theme={theme} changeTheme={changeTheme}></ThemeDropdown>
				</section>
				<div className="flex flex-row">
					<section className="flex flex-row space-x-4 w-[70%] items-start px-4 py-4">
						<CodeEditor code={code} theme={theme.value} language={language?.value} onChange={onChange}></CodeEditor>
					</section>
					<section className="flex flex-shrink-0 w-[27%] flex-col right-container">
						<OutputTerminal></OutputTerminal>
					</section>
				</div>
			</CodeLandingContainer>
		</>
	);
}
