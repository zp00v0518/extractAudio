const child_process = require('child_process');
const path = require('path');
let inputFile = path.resolve(__dirname,"../../Антитіла-Бери_своє.mp4");
const parseInput = path.parse(inputFile);
let outputFile = path.resolve(__dirname, `../../${parseInput.name}.mp3`);
inputFile =  inputFile.split('\\').join('\\');
outputFile =  outputFile.split('\\').join('\\');
console.log(inputFile)

const convert = child_process.exec(`ffmpeg -i ${inputFile} ${outputFile}`, (err, stdout, stderr) => {
	console.log(err)
	console.log(stdout)
	console.log(stderr)
})
