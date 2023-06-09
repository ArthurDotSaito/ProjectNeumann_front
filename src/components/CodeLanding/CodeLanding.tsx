import { useEffect, useState } from 'react';
import { w } from 'windstitch';

import CodeEditor from '../CodeEditor';
import { languageOptions } from '@/constants/languageOptions';
import LanguagesDropdown from './LanguagesDropdown';
import ThemeDropdown from './ThemeDropdown';
import defineTheme from '@/libraries/codeEditorThemes';
import { SelectedOption } from '@/utils/protocols';
import OutputTerminal from './OutputTerminal';
import useSubmit from '@/hooks/api/useSubmit';
import InputField from './InputField';
import { classnames } from '@/utils/classNamesJoin';
import OutputDetails from './OutputDetails';

export default function CodeLanding() {
	const [code, setCode] = useState('');
	const [theme, setTheme] = useState<{ value: string; label: string }>({ value: 'cobalt', label: 'Cobalt' });
	const [language, setLanguage] = useState(languageOptions[0]);
	const [isProcessing, setIsProcessing] = useState(false);
	const [customInput, setCustomInput] = useState('');
	const [outputDetails, setOutputDetails] = useState(null);
	const { submitNewCode } = useSubmit();

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

	const handleCodeCompile = async () => {
		setIsProcessing(true);
		const codeDatatoCompile = {
			language_id: language.id,
			source_code: btoa(code),
			stdin: btoa(customInput),
		};
		console.log(codeDatatoCompile);
		try {
			const compileResponse = await submitNewCode(codeDatatoCompile);
			setOutputDetails(compileResponse);
		} catch (error) {
			alert(error);
		} finally {
			setIsProcessing(false);
		}
	};

	useEffect(() => {
		defineTheme('oceanic-next').then((_) => setTheme({ value: 'oceanic-next', label: 'Oceanic Next' }));
	}, []);

	return (
		<>
			<CodeLandingContainer>
				<section className="flex flex-col xs:flex-row items-center ">
					<LanguagesDropdown onSelectChange={onSelectChange}></LanguagesDropdown>
					<ThemeDropdown theme={theme} changeTheme={changeTheme}></ThemeDropdown>
				</section>
				<div className="flex flex-col xs:flex-row">
					<section className="flex flex-col xs:flex-row xs:w-[75%] space-x-4 items-start px-4 py-4">
						<CodeEditor code={code} theme={theme.value} language={language?.value} onChange={onChange}></CodeEditor>
					</section>
					<section className="flex flex-col px-3">
						<OutputTerminal outputDetails={outputDetails}></OutputTerminal>
						<div className="flex flex-col items-end">
							<InputField customInput={customInput} setCustomInput={setCustomInput}></InputField>
						</div>
						<OutputDetails outputDetails={outputDetails}></OutputDetails>
						<button
							onClick={handleCodeCompile}
							disabled={!code}
							className={classnames(
								'mt-4 border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-white text-black flex-shrink-0',
								!code ? 'opacity-50' : '',
							)}
						>
							{isProcessing ? 'Processing...' : 'Compile and Execute'}
						</button>
					</section>
				</div>
			</CodeLandingContainer>
		</>
	);
}

const CodeLandingContainer = w.main(`
    w-full h-full 
`);
