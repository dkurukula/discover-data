// Explore json file from Toronto Data Catalogue
fs = require('fs')

const fsdata = fs.readFileSync('../scrape/tor-dat.json', 'utf8', (err, data) => {
	if (err){ 
		return console.log(err)
	} else {
		return data
	}
})

const topKeys = (data) => {
	let keys = Object.keys(data[0])
	console.log(keys)
	return keys
}	

// get all unique values in data for given key
const getAll = (data, key) => {
	let all = data.map( d => {
		let dk = d[`${key}`]
		if (dk == null){ return "" } else { return dk.split(",") }
	})
	let unique = [...new Set(all.flat())].filter( x => x !== "")
	return unique
}

let data = JSON.parse(fsdata.toString())
let keys = topKeys(data)

console.log(getAll(data,'topics'))


