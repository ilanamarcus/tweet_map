const csvToJson = require('convert-csv-to-json')
const settings = require('./static/settings')
const handlebars = require('handlebars')

const source = "{{summary}} <a href='{{link}}' target='_blank'>More details</a>";
const template = handlebars.compile(source);

let service = function () {

	let getData = function () {
		json = csvToJson.fieldDelimiter('\t').getJsonFromCsv("./static/countries/countries.tsv");
		json = json.map(convertJson)
		return json;
	}

	let convertJson = function(input) {
		let output = {
			id: input.code,
			color: settings[input.status],
			description: template(input)
		}
		return output;
	}

	return {
		getData : getData
	}
}

module.exports = service();