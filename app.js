const express = require('express')
const fs = require('fs')
const app = express()

const datafp = "./explore/tor-dat.json"

const port = 3000

app.get('/', (req, res) => {
	fs.readFileSync(datafp, (err, json) => {
		let o = JSON.parse(json);
		res.json(o);
	})
})

app.listen(port, () => console.log(`app listening on port ${port}`))
