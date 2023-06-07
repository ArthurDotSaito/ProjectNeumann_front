import { languageOptions } from '@/constants/languageOptions';
import { LanguageSelectorCustomStyle } from '@/styles/components_styles/codeLandingStyle';
import Select from 'react-select';

export default function LanguagesDropdown({ onSelectChange }: any) {
	return (
		<section className="px-4 py-2">
			<Select
				placeholder={`filter by category`}
				options={languageOptions}
				defaultValue={languageOptions[0]}
				styles={LanguageSelectorCustomStyle}
				onChange={(selectedLanguage) => onSelectChange(selectedLanguage)}
			></Select>
		</section>
	);
}
