// '#lesson #lessons #для_новичков #для_начинающих #создать_сайт #css #css3 #курсы_по_css'

const fromYou =
	'lesson,lessons,Для новичков,Для начинающих,Создать сайт,css,css3, Курсы по css'

// можно преобразовать в массив и после чего с помощью forEach каждый элемент менять

const toRutube = fromYou.split(',')
const final = []

toRutube.forEach((elem) => {
	const value = elem.split(' ').join('_')
	const changedTag = '#' + value.toLocaleLowerCase()

	final.push(changedTag)
})

console.log(final)
const str = final.join(' ')
console.log(str)
