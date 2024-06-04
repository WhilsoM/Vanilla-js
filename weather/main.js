const url = `
https://api.open-meteo.com/v1/forecast?
latitude=34.052235&
longitude=-118.243683&
current=temperature_2m,is_day,wind_speed_10m
`

fetch(url)
	.then((data) => {
		return data.json()
	})
	.then((data) => {
		renderWeather(data)
		console.log(data)
	})

function renderWeather(data) {
	const latitude = data.latitude
	const longitude = data.longitude
	const currentData = data.current
	const roundTemperature = Math.round(currentData.temperature_2m)

	const result = `
  <p>Широта: ${latitude}</p>
  <p>Долгота: ${longitude}</p>
  <p>Температура: ${roundTemperature}</p>
  <p>Сейчас: ${currentData.is_day === 0 ? 'Ночь' : 'День'}</p>
  `
	document.body.insertAdjacentHTML('beforebegin', result)
}

console.log(new Date('iso8601'))
