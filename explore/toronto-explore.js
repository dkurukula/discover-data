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

let data = JSON.parse(fsdata.toString())
let keys = topKeys(data)

console.log(getAllCommaList(data,'topics'))
console.log(getAllCommaList(data,'formats'))
console.log(getAllSingle(data,'isopen'))
console.log(getAllSingle(data,'state'))
console.log(getAllSingle(data,'type'))
console.log(getAllSingle(data,'dataset_category'))
console.log(getAllSingle(data,'refresh_rate'))
console.log(getAllSingle(data,'owner_division'))
console.log(getAllSingle(data,'private'))
