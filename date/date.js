const weekList = {
	0: 'ВС',
	1: 'ПН',
	2: 'ВТ',
	3: 'СР',
	4: 'ЧТ',
	5: 'ПТ',
	6: 'СБ',
}

function getWeekDay(date) {
	const converted = new Date(date)
	const week = converted.getDay()

	return weekList[week]
}

console.log(getWeekDay(Date.now()))
console.log(getWeekDay('2017-05-05T15:00'))
