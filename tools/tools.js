// опциональная цепочка ?.

const address = 'New-York'

const user = {
	firstName: 'John',
	lastName: 'Grushev',
	address,
}

console.log(user.lastName)
console.log(user?.address)
console.log(user.hells.street) // Error
console.log(user.hells?.street) // success
