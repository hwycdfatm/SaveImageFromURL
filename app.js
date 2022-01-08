const fs = require('fs')
const request = require('request')

const url = ''
const path = ''
const download = (url, path, callback) => {
	request.head(url, (err, res, body) => {
		request(url)
			.pipe(fs.createWriteStream(`./images/${path}.jpg`))
			.on('close', callback)
	})
}

download(url, path, () => {
	console.log('✅ Done!')
})
