const container = document.querySelector('#container')

const paragraph = document.createElement('p')
paragraph.style.color = 'red'
paragraph.textContent = "Hey, i'm red!"

const h3 = document.createElement('h3')
h3.style.color = 'blue'
h3.textContent = "I'm blue h3!"

const div = document.createElement('div')
// div.style.border = '1px solid #000'
div.setAttribute('style', 'background-color: pink; border: 1px solid #000')

const h1 = document.createElement('h1')
h1.textContent = "I'm in a div"

const pAnother = document.createElement('p')
pAnother.textContent = 'ME TOO!'

div.appendChild(h1)
div.appendChild(pAnother)

container.appendChild(div)
