const newPost = {
	title: 'Important news',
	body: 'Important news!',
}
const newPost2 = {
	title: 'New Anime',
	body: 'New anime series!',
}
const newPost3 = {
	title: 'Breaking News',
	body: 'Breaking News!',
}

// axios
// 	.post('https://jsonplaceholder.typicode.com/posts', {
// 		newPost,
// 		newPost2,
// 		newPost3,
// 	})
// 	.then((response) => {
// 		console.log(response.data)
// 	})

// const arrowAsync = async (url) => {
// 	return await axios.get(url).then( (response) => {
// 		console.log(response)
// 	})
// }

async function expressionAsync(url) {
	return await axios
		.get(url)
		.then((res, rej) => {
			console.log(res)
		})
		.catch((error) => {
			console.log(error)
		})
}

expressionAsync('https://jsonplaceholder.typicode.com/posts')
