import { LanguageSelectorCustomStyle } from '@/styles/components_styles/codeLandingStyle';
import Select from 'react-select';

export default function ThemeDropdown({ theme, changeTheme }: any) {
	return (
		<section className="px-4 py-2">
			<Select placeholder={`Select Editor Theme`} styles={LanguageSelectorCustomStyle}></Select>
		</section>
	);
}
