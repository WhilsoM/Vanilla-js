/**
 *
 * игра камень ножницы бумага:
 * как определяются победители:
 *  ножницы побеждают бумагу
 *  бумага побеждает камень
 *  камень побеждает ножницы
 *
 * массив с «камень», «бумагу» или «ножницы»
 *
 * компьютер случайным образом возвращает
 * «камень», «бумагу» или «ножницы».
 *
 * будет счет у кого больше тот и победил, всего раундов 5
 *
 */
let humanScore = 0
let computerScore = 0

const rockPaperScissor = ['rock', 'paper', 'scissors']
const countRounds = +prompt('Кол-во раундов: ', 5)

function getHumanChoice() {
	const userChoice = prompt('Enter ur choice (rock, paper, scissors):')
	return userChoice
}

function getComputerChoice() {
	let choice = Math.floor(Math.random() * rockPaperScissor.length)
	return rockPaperScissor[choice]
}

function playRound(humanChoice, computerChoice) {
	const humanChoiceInLowerCase = humanChoice.toLowerCase()

	if (humanChoiceInLowerCase === computerChoice) {
		return 'Ничья!'
	}

	switch (humanChoiceInLowerCase) {
		case 'rock':
			if (computerChoice === 'scissors') {
				return 'Вы выиграли! Камень побеждает ножницы.'
			} else {
				return 'Вы проиграли! Бумага побеждает камень.'
			}
		case 'paper':
			if (computerChoice === 'rock') {
				return 'Вы выиграли! Бумага побеждает камень.'
			} else {
				return 'Вы проиграли! Ножницы побеждают бумагу.'
			}
		case 'scissors':
			if (computerChoice === 'paper') {
				return 'Вы выиграли! Ножницы побеждают бумагу.'
			} else {
				return 'Вы проиграли! Камень побеждает ножницы.'
			}
	}
}

function playGame() {
	if (countRounds >= 50) alert('Ты сумашедший, но держи свои раунды')
	for (let i = 0; i < countRounds; i++) {
		const humanSelection = getHumanChoice()
		const computerSelection = getComputerChoice()

		const result = playRound(humanSelection, computerSelection)
		console.log(result) // Вывод результата каждого раунда
		try {
			if (result === undefined) {
				console.log('null')
			} else if (result.includes('выиграли')) {
				humanScore++
			} else if (result.includes('проиграли')) {
				computerScore++
			}
		} catch (error) {
			console.log(error)
		}
	}

	// Вывод итогового счета после пяти раундов
	console.log(
		`Итоговый счет: Человек ${humanScore} : Компьютер ${computerScore}`
	)
}

playGame()

document.body.innerHTML = `Human Score: ${humanScore} : Robot Score: ${computerScore}`
