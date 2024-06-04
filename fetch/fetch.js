// // methods: GET, POST, DELETE, PUT

// // fetch
// const URL = 'https://api.waifu.im/tags'
// const URLImg = 'https://api.waifu.im/search'
// const waif = 'https://api.waifu.im/milf'
// // console.log(data.nsfw) // info ass, h e n t a i, milf

// // tags
// // search
// // nsfw[0].name === 'ass'

// fetch(URL, {
// 	method: 'GET',
// })
// 	.then((data) => {
// 		return data.json()
// 	})
// 	.then((data) => {
// 		const data2 = data.nsfw
// 		console.log(data2)

// 		const objTags = {
// 			ass: data2[0],
// 			hentai: data2[1],
// 			milf: data2[2],
// 			oral: data2[3],
// 			paizuri: data2[4],
// 			ecchi: data2[5],
// 			ero: data2[6],
// 		}
// 		console.log(objTags)
// 	})

// function addImg(data) {
// 	const imgElem = document.createElement('img')
// 	imgElem.src = data.images[0].url
// 	imgElem.setAttribute('height', '900px')

// 	document.body.append(imgElem)
// }

// methods: GET, POST, DELETE, PUT

// fetch
const URL = 'https://jsonplaceholder.typicode.com/posts/1'
const newPost = {
	userId: 1,
	id: 18888,
	title: 'Hello, this title',
	body: 'This paragraph and text for id 18888',
}

fetch(URL, {
	method: 'POST',
})
	.then((data) => {
		return data.json()
	})
	.then((data) => {
		const data2 = data
		console.log(data2)
	})
