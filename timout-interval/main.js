/**
 * SERVER IS FAKE!
 */

function startTimer(timerId, delay, stopDelay) {
	const id = setInterval(() => {
		console.log(timerId, 'Запрос на сервер')
	}, delay)

	setTimeout(() => {
		console.log('Запросы на серверы остановлены')

		clearInterval(id)
	}, stopDelay)
}

startTimer(1, 1000, 6000)
startTimer(2, 500, 2000)
startTimer(3, 0, 10000)
