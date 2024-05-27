// без Деструктуризации
// const numbers = [1, 2, 3, 4, 5]
// const one2 = numbers[0] // 1
// const two2 = numbers[1] // 2
// const three2 = numbers[2] // 3
// const four2 = numbers[3] // 4
// const five2 = numbers[4] // 5
// console.log(one2, two2, three2, four2, five2)

// с Деструктуризацией

// const numbers = [1, 2, 3, 4, 5]
// const user = { user_name: 'alex', user_age: 20 }

// const [one, two, three, four, five] = [1, 2, 3, 4, 5]
// const { user_name, user_age } = { user_name: 'Alex', user_age: 20 }

// console.log(one)
// console.log(two)
// console.log(three)
// console.log(four)
// console.log(five)

// console.log(user_name)
// console.log(user_age)

const SERVER_ARRAY = [1, 2, 3, 4, 5]
const SERVER_OBJ = { user_name: 'Alex', user_age: 20 }

// с помощью , могу пропускать элементы в массиве т.к они идут через индекс
const [, , , , five] = SERVER_ARRAY

// console.log(five) // 5

// объекты по ключам и можно делать не по порядку
// также могу присваивать значение по умолчанию
// и переименовывать ключи с помощью :

const {
	user_name: userName,
	user_age: userAge,
	user_hasCar: userHasCar = false,
} = SERVER_OBJ

console.log(userName, userAge, userHasCar)
