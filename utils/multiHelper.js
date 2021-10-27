export const getValueAndName = (form, string) => {
	return { value: form[string], name: string }
}

export const generateRandomColor = (array) => {
	return Array(array.length)
		.fill('')
		.map((item) => {
			const gradient1 = `rgba(${Math.floor(Math.random() * 255) + 1}, ${
				Math.floor(Math.random() * 255) + 1
			}, ${Math.floor(Math.random() * 255) + 1}, 0.5)`
			return gradient1
		})
}

export const DoughnutOptions = {
	legend: {
		display: true,
		position: 'right',
		// maxWidth: 140,

		reverse: true,
		rounded: true
	},
	tooltips: {
		display: true
	},
	elements: {
		arc: {
			borderWidth: 0
		}
	},
	height: 200
}

export const months = [
	'January',
	'Feburary',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
]
