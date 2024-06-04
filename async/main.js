// // promise
// // games html render

// const body = document.querySelector('body')
// const h2Elem = document.querySelector('h2')

// function renderLoading() {
// 	const loading = document.createElement('div')
// 	loading.id = 'loading'
// 	loading.textContent = 'Loading...'

// 	body.append(loading)
// }

// function renderGames(games) {
// 	const loading = document.querySelector('#loading')
// 	loading.remove()

// 	h2Elem.textContent += ' - Yours'

// 	games.forEach((elem) => {
// 		const templateGame = document.createElement('div')
// 		templateGame.textContent = `Game: ${elem.name}`
// 		body.append(templateGame)
// 	})
// }

// function fetchGames() {
// 	return new Promise((res, rej) => {
// 		setTimeout(() => {
// 			const gamesFromServer = 'lll'

// 			if (Array.isArray(gamesFromServer)) {
// 				res(gamesFromServer)
// 			} else {
// 				rej('Что-то не так!')
// 			}
// 		}, 2000)
// 	})
// }

// function renderErrorMessage() {
// 	alert('Попробуйте зайти позднее')
// 	h2Elem.textContent += ' - ERROR!'
// }
// renderLoading()

// fetchGames()
// 	.then((games) => {
// 		renderGames(games)
// 	})
// 	.catch((message) => {
// 		renderErrorMessage()
// 		console.log(message)
// 	})
