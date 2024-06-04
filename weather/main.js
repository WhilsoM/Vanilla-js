// api: https://open-meteo.com/
// update version from 0.2 to 0.3
//
const latitudeNode = document.querySelector('#latitude')
const longitudeNode = document.querySelector('#longitude')
const btnNode = document.querySelector('#submit')

const resultNode = document.querySelector('.result')

let url = `
https://api.open-meteo.com/v1/forecast?
latitude=${latitudeNode.value}&
longitude=${longitudeNode.value}&
current=temperature_2m,is_day,wind_speed_10m
`

latitudeNode.addEventListener('input', updateUrl)
longitudeNode.addEventListener('input', updateUrl)

function updateUrl() {
	if (-90 < +latitudeNode.value < 90 || -180 < longitudeNode < 180) {
		return (url = `https://api.open-meteo.com/v1/forecast?latitude=${latitudeNode.value}&longitude=${longitudeNode.value}&current=temperature_2m,is_day,wind_speed_10m
    `)
	}
	return alert('Error')
}

btnNode.onclick = () => {
	try {
		fetch(url)
			.then((data) => {
				return data.json()
			})
			.then((data) => {
				renderWeather(data)
			})
	} catch (error) {
		console.log(error)
	}
}

function renderWeather(data) {
	const latitudeData = data.latitude
	const longitudeData = data.longitude
	const currentData = data.current
	const roundTemperature = Math.round(currentData.temperature_2m)

	const result = `
  <p>latitude: ${latitudeData}</p>
  <p>longitude: ${longitudeData}</p>
  <p>Temperature: ${roundTemperature}&deg;C</p>
  <p>Today: ${currentData.is_day === 0 ? 'Night' : 'Day'}</p>
  `

	resultNode.innerHTML = ''

	resultNode.innerHTML = result
}
