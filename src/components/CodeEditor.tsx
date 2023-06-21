import Editor from '@monaco-editor/react';
import { useState } from 'react';
import { w } from 'windstitch';

import { CodeEditorProps } from '@/utils/protocols';

export default function CodeEditor({ code, theme, language, onChange }: CodeEditorProps) {
	const [value, setValue] = useState(code || '');

	const handleChangeCodeEditorvalue = (value: any) => {
		setValue(value);
		onChange('code', value);
	};

	return (
		<CodeEditorContainer>
			<Editor
				height="70vh"
				width={`100%`}
				language={language || 'javascript'}
				theme={theme}
				defaultValue="Your code here"
				value={value}
				onChange={handleChangeCodeEditorvalue}
			></Editor>
		</CodeEditorContainer>
	);
}

const CodeEditorContainer = w.main(`overlay rounded-md overflow-hidden w-full h-full shadow-4xl`);
