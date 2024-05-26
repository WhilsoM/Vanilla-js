const pElem = document.querySelector('p')
const timeElem = document.querySelector('.time')

// получить дату
const data = new Date()
const year = data.getFullYear()
const day = data.getDate()
const month = data.getMonth()

const monthList = {
	0: 'Январь',
	1: 'Февраль',
	2: 'Март',
	3: 'Апрель',
	4: 'Май',
	5: 'Июнь',
	6: 'Июль',
	7: 'Август',
	8: 'Сентябрь',
	9: 'Октябрь',
	10: 'Ноябрь',
	11: 'Декабрь',
}

pElem.insertAdjacentText(
	'beforeend',
	`${monthList[month]} ${day} день ${year} год`
)

function clock() {
	let date = new Date()
	let hours = date.getHours()
	let minutes = date.getMinutes()
	let seconds = date.getSeconds()

	document.querySelector('.time').innerHTML =
		`${hours} ч ${minutes} мин ${seconds} сек`
}

setInterval(clock, 1000)
clock()
