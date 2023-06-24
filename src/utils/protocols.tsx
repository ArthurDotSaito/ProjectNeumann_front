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

export type SelectedTheme = {
	value: ThemeName | 'light' | 'vs-dark';
	values?: ThemeName;
};

export interface SubmitCodeData {
	language_id: string;
	source_code: string;
	stdin: string;
}

export interface Post {
	id: number;
	title: string;
	content: string;
	date: string;
	createdAt: string;
	updatedAt: string;
}

export interface CommentFormProps {
	postId: string | string[];
	postCommentData: any;
	postCommentLoading: boolean;
	postCommentError: any;
	postCommentFunction: (postId: string | string[], content: string) => Promise<void>;
}
