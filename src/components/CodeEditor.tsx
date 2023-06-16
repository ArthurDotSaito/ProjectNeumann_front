import Editor from '@monaco-editor/react';
import { useState } from 'react';

import { CodeEditorProps } from '@/utils/protocols';
import { CodeEditorContainer } from '@/styles/components_styles/codeEditorStyle';

export default function CodeEditor({ code, theme, language, onChange }: CodeEditorProps) {
	const [value, setValue] = useState(code || '');

	const handleChangeCodeEditorvalue = (value: any) => {
		setValue(value);
		onChange('code', value);
	};

	return (
		<CodeEditorContainer>
			<Editor
				height="85vh"
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
