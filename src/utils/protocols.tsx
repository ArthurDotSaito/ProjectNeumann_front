type CodeEditorProps = {
	onChange: (action: string, data: string) => void;
	language?: string;
	code?: string;
	theme?: string;
};

type SelectedOption = {
	id: number;
	name: string;
	label: string;
	value: string;
};
