// // filter - не может изменить структуру данных, но может изменить их кол-во
// // map - не может изменить кол-во данных, но может изменить тип данных

// // find - ищет элемент и выводит его показывает что он есть
// // some - ищет элемент и выводит либо true либо false
// // includes - ищет элемент и выводит либо true либо false, но не может работать с массивами или объектами
// // example
// // const arr = [1, 2, 3, 4, 5]
// // console.log(arr.includes(3)) // true

// const arrWithObj = [1, 2, 3, { hello: 'name' }, [1, 2, 3, 4]]
// // console.log(arrWithObj.includes({ hello: 'name' })) // false
// // console.log(arrWithObj.includes([1, 2, 3, 4])) // false

// const arr = arrWithObj.find((elem) => {
// 	// возвращает сам элемент
// 	if (typeof elem === 'object') {
// 		return true
// 	}
// 	return false
// })

// const arr1 = arrWithObj.some((elem) => {
// 	// true или false возвращает
// 	if (typeof elem === 'object') {
// 		return true
// 	}
// 	return false
// })

// console.log(arr, arr1)

// const data = [
// 	{
// 		id: 1,
// 		title: 'Новость дня',
// 		author: 'Alex',
// 		likes: 50,
// 	},
// 	{
// 		id: 2,
// 		title: 'Важная новость',
// 		author: 'Anna',
// 		likes: 150,
// 	},
// 	{
// 		id: 3,
// 		title: 'Важная новость #2',
// 		author: 'John',
// 		likes: 140,
// 	},
// ]

// const dataMoreLikes = data.filter((elem) => elem.likes > 100)

// const dataId = dataMoreLikes.map((elem) => {
// 	return {
// 		id: elem.id,
// 		title: elem.title,
// 	}
// })

// console.log(dataId)
/**
 * [{
 * id: 2,
 * title: 'Важная новость'
 * },
 * {
 * id: 3,
 * title: 'Важная новость #2'
 * }
 * ]
 */

// const arr = [1, 2, 3, 4, 5]
// let sum = 0

// arr.forEach((elem) => (sum += elem))

// console.log(sum)

// arr.map((elem) => (sum += elem))

// console.log(sum)

// const user = ['my', 'name', 'is', 'Alex'].join(' ')
// console.log(user)

// const user = ['my', 'name', 'is', 'Alex']
// const user2 = ['my', 'name', 'is', 'Alex']
// let str = ''
// let str2 = ''

// user.forEach((elem) => (str += ' ' + elem))
// user2.map((elem) => (str2 += ' ' + elem))

// console.log(str === str2)
// console.log(str)
// console.log(str2)

// const badAge = 20
// const arrAge = [15, 10, 20, 30] // true/false

// const result = arrAge.some((elem) => {
// 	if (elem === badAge) {
// 		return true
// 	}
// 	return false
// })

// console.log(result)

const users = [
	{
		name: 'Alex',
		age: 20,
	},
	{
		name: 'Anna',
		age: 30,
	},
	{
		name: 'John',
		age: 10,
	},
]

const filtered = users.filter((user) => (user.age > 18 ? user.name : false))

const nameUsers = filtered.map((elem) => elem.name)

console.log(nameUsers)
