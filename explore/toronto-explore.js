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
const getAllCommaList = (data, key) => {
	let all = data.map( d => {
		let dk = d[`${key}`]
		if (dk == null){ return "" } else { return dk.split(",") }
	})
	let unique = [...new Set(all.flat())].filter( x => x !== "")
	return unique
}
const getAllSingle= (data, key) => {
	let all = data.map( d => {
		let dk = d[`${key}`]
		if (dk == null){ return "" } else { return dk }
	})
	let unique = [...new Set(all.flat())].filter( x => x !== "")
	return unique
}

const logdata = (key, data, func) => {
	console.log(`\n\n${key} ------\n`, func(data,key))
}

let data = JSON.parse(fsdata.toString())
let keys = topKeys(data)

logdata('topics', data, getAllCommaList)
logdata('formats', data, getAllCommaList)
logdata('dataset_category', data, getAllSingle)
logdata('refresh_rate', data, getAllSingle)
logdata('owner_division', data, getAllSingle)
logdata('title', data, getAllSingle)
