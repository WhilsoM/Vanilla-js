// spread and rest ...
// i dunno how work rest and spread yet
// spread
// const number = [...numbers] // copy
// const number2 = numbers // copy

// console.log(number2 === number) // false
// console.log(numbers === number2) // true
// console.log(number2)
// console.log(number)

// rest
let empty = 'empty'
function sum(a, b, ...others) {
	const lenOthers = others.length
	console.log(lenOthers)

	const condition = lenOthers === 0 ? empty : others

	let sumElements = 0
	if (condition !== empty) {
		for (const i of elements) {
			sumElements += i
		}
	}
	return `${a} + ${b} = ${a + b}, others elements ${condition}`
}

const [num1, num2, ...other] = [1, 2, 3, 4, 5]

console.log(sum(num1, num2, other))
console.log(sum(num1, num2, other))
