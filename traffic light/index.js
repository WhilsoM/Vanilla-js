const btnNode = document.querySelector('.js-btn')
const trafficLightNode = document.querySelector('.traffic-light')

initLight(trafficLightNode)

btnNode.onclick = () => {
	switchLight(trafficLightNode)
}
