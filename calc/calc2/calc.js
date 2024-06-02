const OPERATIONS = {
	sum: '+',
	substract: '-',
	multiply: '*',
	divison: '/',
}

function calc({ a, b, operation }) {
	let result = null

	switch (operation) {
		case OPERATIONS.sum:
			return (result = sum(a, b))

		case OPERATIONS.substract:
			return (result = substract(a, b))
		case OPERATIONS.multiply:
			return (result = multiply(a, b))
		case OPERATIONS.divison:
			return (result = divison(a, b))

		default:
			return
	}
}
