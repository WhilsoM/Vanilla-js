const userInformation = {
	name: 'Иван',
	surname: 'Иванов',
	age: 15,
	family: {
		dad: {
			name: 'Александр',
			surname: 'Иванов',
			age: undefined,
		},
		mom: {
			name: 'Наталья',
			surname: 'Иванова',
		},
		brother: {
			name: 'Константин',
			surname: 'Иванов',
			age: '3',
		},
		sister: {
			name: 'Александра',
			surname: 'Иванова',
			age: 20,
		},
	},
}

function getInfo(obj) {
	const lengthFamily = Object.keys(obj.family).length // длина 3

	console.log(
		`У ${obj.name}а ${obj.surname}а ${lengthFamily} член(-а/-ов) семьи`
	)

	const arrayFamily = Object.entries(obj.family) // в массив

	let str = ''

	for (let i = 0; i < arrayFamily.length; i++) {
		const valueNames = arrayFamily[i][0]
		const valueKeys = arrayFamily[i][1]

		if (
			typeof valueKeys.age === 'string' ||
			typeof valueKeys.age === 'number'
		) {
			const howAge = Number(valueKeys.age) < 5 ? 'года' : 'лет'

			console.log(
				`${valueNames} - ${valueKeys.name} ${valueKeys.surname} ${Number(
					valueKeys.age
				)} ${howAge}`
			)
		} else {
			console.log(
				`${valueNames} - ${valueKeys.name} ${valueKeys.surname} (Возраст не указан)`
			)
		}
	}
}

console.log(getInfo(userInformation))
/* 


  У (`${user.name}а ${user.surname}а`) (family.length) член(-а/-ов)

  Отец - {dad.name + dad.surname} (возраст не известен)
  Мать - mom.name + mom.surname (возраст не известен)
  Брат - brother.name + brother.surname ({brother.age} лет)
  
  вместо того чтобы писать dad.name или mom.name и т.д
  можно сделать подобии цикла чтобы аргумент туда (сюдаа)
  через цикл я перебираю ключи и значения могу с помощью Object.entries() 
  - чтобы преобразовать в массив
  или цикл for in создать переменную и присвоить ей значение Object.values()
  
   преобразовать объект в массив и дальше с ним работать
  let str = ''
  проверка на возраст if obj.age === undefined str += 'возраст не указан'

  сделать функцию на счет условия и закидывать в шаблонную строку ${age(dad.age)} что-то подобие такого
  через индекс брать 0 и допустим там лежит dad писать dad - dad.name dad.surname dad.age 
  значения брать через 1

  
    в консоль вывести имя и длину семьи
    
    ключ family перевести в массив и узнать его длину, чтобы перевести в массив нужно использовать метод 
    Object.keys(userInformation.family).length
*/
