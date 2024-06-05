// удалить терминал

// try - catch - finally
// throw

console.log('start')
const obj = { name: 'Alex' }

function tryThisCode(object) {
	try {
		const strObj = JSON.stringify(object)
		console.log(strObj)
		console.log(JSON.parse(strObj))
	} catch (error) {
		throw Error('Error, object is incorrect')
	} finally {
		console.log('Exactly you finally this code')
	}
}

tryThisCode(obj)
console.log('end')
