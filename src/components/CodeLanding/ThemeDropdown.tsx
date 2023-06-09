import { monacoThemes } from '@/libraries/codeEditorThemes';
import { LanguageSelectorCustomStyle } from '@/styles/components_styles/codeLandingStyle';
import Select from 'react-select';

export default function ThemeDropdown({ theme, changeTheme }: any) {
	return (
		<section className="px-4 py-2">
			<Select
				placeholder={`Select Editor Theme`}
				styles={LanguageSelectorCustomStyle}
				value={theme}
				onChange={changeTheme}
				options={Object.entries(monacoThemes).map(([themeId, themeName]) => ({
					key: themeId,
					value: themeId,
					label: themeName,
				}))}
			></Select>
		</section>
	);
}
