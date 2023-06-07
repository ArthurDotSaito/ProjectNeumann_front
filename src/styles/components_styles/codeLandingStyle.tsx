import { w } from 'windstitch';

export const CodeLandingContainer = w.main(`
    h-4 w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500
`);

export const LanguageSelectorCustomStyle = {
	control: (styles: any) => ({
		...styles,
		width: '100%',
		maxWidth: '14rem',
		minWidth: '12rem',
		borderRadius: '5px',
		border: '2px solid #000000',
		boxShadow: '5px 5px 0px 0px rgba(0,0,0)',
		color: '#000',
		fontSize: '0.8rem',
		lineHeight: '1.75rem',
		backgroundColor: '#FFFFFF',
		cursor: 'pointer;',
		':hover': {
			border: '2px solid #000000',
			boxShadow: 'none',
		},
	}),
	menu: (styles: any) => {
		return {
			...styles,
			maxWidth: '14rem',
			backgroundColor: '#FFF',
			border: '2px solid #000000',
			borderRadius: '5px',
			boxShadow: '5px 5px 0px 0px rgba(0,0,0)',
		};
	},
	option: (styles: any) => {
		return {
			...styles,
			width: '100%',
			fontSize: '0.8rem',
			lineHeight: '1.75rem',
			background: '#FFF',
			color: '#000',
			':hover': {
				backgroundColor: 'rgb(243,244,246)',
				color: '#000',
				cursor: 'pointer',
			},
		};
	},
	placeholder: (defaultStyles: any) => {
		return {
			...defaultStyles,
			fontSize: '0.8rem',
			color: '#000',
			lineHeight: '1.75rem',
		};
	},
};
