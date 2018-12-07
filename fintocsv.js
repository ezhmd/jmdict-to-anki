module.paths.push('/usr/local/lib/node_modules');

var fs = require('fs');
var fin = require("./dist/fin.json");

var string = "";
fin.forEach((element, index) => {
	string += 
		element.word + "\t" +
		(index + 1) + "\t" +
		element.sources + "\t" +
		element.jmdict_details + "\t" +
		element.jmdict_freq + "\t" +
		element.kanji_id + "\t" +
		element.kanji_ids + "\t" +
		element.jitenon_url + "\t" +
		element.jitenon_details + "\t" +
		element.audio + "\t" +
		element.tags +
		"\n";
});

fs.writeFileSync('./dist/fin.csv', string, 'utf8'); 