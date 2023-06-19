export default function getFormattedDate(dateString: string): string {
	const date = new Date(dateString);

	if (isNaN(date.getTime())) {
		// Tratar o caso de uma string de data inválida
		return '';
	}

	return new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(date);
}
