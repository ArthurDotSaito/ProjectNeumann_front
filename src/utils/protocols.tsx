import { monacoThemes } from '@/libraries/codeEditorThemes';

export type CodeEditorProps = {
	onChange: (action: string, data: string) => void;
	language?: string;
	code?: string;
	theme?: string;
};

export type SelectedOption = {
	id: number;
	name: string;
	label: string;
	value: string;
};

type ThemeName = keyof typeof monacoThemes;

export type SelectedTheme {
	value: ThemeName | 'light' | 'vs-dark';
	values?: ThemeName;
}
