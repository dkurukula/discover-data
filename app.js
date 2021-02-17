const express = require('express')
const fs = require('fs')
const app = express()

const datafp = "./explore/tor-dat.json"

const port = 3000

app.get('/', (req, res) => {
	console.log('begin fs read')
	fs.readFile(datafp,'utf8', (err, json) => {
		if (err) {
			throw err
		}
		res.send(JSON.parse(json));
	})
})

app.listen(port, () => console.log(`app listening on port ${port}`))
