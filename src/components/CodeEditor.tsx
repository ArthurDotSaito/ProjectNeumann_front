import { CodeEditorContainer } from '@/styles/components_styles/codeEditorStyle';
import { Editor } from '@monaco-editor/react';
import { useState } from 'react';

export default function CodeEditor({ code, theme, language, onChange }: CodeEditorProps) {
	const [value, setValue] = useState(code || '');

	function handleChangeCodeEditorvalue(value: string) {
		setValue(value);
		onChange('code', value);
	}

	return (
		<CodeEditorContainer>
			<Editor
				height="85vh"
				width={`100%`}
				language={language || 'javascript'}
				theme={theme}
				defaultValue="Your code here"
				onChange={() => handleChangeCodeEditorvalue}
			></Editor>
		</CodeEditorContainer>
	);
}
