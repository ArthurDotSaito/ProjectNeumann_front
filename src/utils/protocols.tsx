type CodeEditorProps = {
	onChange: (action: string, data: string) => void;
	language?: string;
	code?: string;
	theme?: string;
};
