import { useState } from 'react';
import CodeEditor from '../CodeEditor';

import { languageOptions } from '@/constants/languageOptions';
import { CodeLandingContainer } from '@/styles/components_styles/codeLandingStyle';
import LanguagesDropdown from './LanguagesDropdown';
import ThemeDropdown from './ThemeDropdown';
import defineTheme from '@/libraries/codeEditorThemes';
import { SelectedOption } from '@/utils/protocols';

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

	function onSelectChange(selectedOption: SelectedOption) {
		console.log(selectedOption);
		setLanguage(selectedOption);
	}

	function changeTheme(selectedTheme: any) {
		if (['light', 'vs-dark'].includes(selectedTheme.value)) {
			setTheme(selectedTheme);
		} else {
			defineTheme(selectedTheme.values).then((e) => setTheme(selectedTheme));
		}
	}

	return (
		<>
			<CodeLandingContainer>
				<section className="flex flex row">
					<LanguagesDropdown onSelectChange={onSelectChange}></LanguagesDropdown>
					<ThemeDropdown theme={theme} changeTheme={changeTheme}></ThemeDropdown>
				</section>
				<CodeEditor code={code} theme={theme} language={language?.value} onChange={onChange}></CodeEditor>
			</CodeLandingContainer>
		</>
	);
}
