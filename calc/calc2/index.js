const inputANode = document.querySelector('.js-input-a')
const inputBNode = document.querySelector('.js-input-b')
const btnResultNode = document.querySelector('.js-btn-result')
const selectOperationNode = document.querySelector('.js-select-operation')
const outputNode = document.querySelector('.js-output')

btnResultNode.addEventListener('click', function () {
	const a = +inputANode.value
	const b = +inputBNode.value
	const operation = selectOperationNode.value

	const result = calc({ a, b, operation })
	outputNode.textContent = result
})
