//Assignment No.3
//Read the given CSV file line by line and print the output in console.


let run = module.exports = function(){
//Import fs module
let fs = require("fs");
let readline = require("readline");
let lineData;
//let filename = "/data/country_details.csv";
//Read file contents and process the data
let data = readline.createInterface(
{
	 input: fs.createReadStream('data/country_details.csv')
});
//Remove the double quotes from the data
data.on('line', function(line)
{
	lineData=line.trim().split(",");
});

//Split the data into lines
 
//Display the file contents line by line on console
//HINT: Iterate through line by line 
data.on('close', function(err)
{
	console.log(lineData);
});

}
run();