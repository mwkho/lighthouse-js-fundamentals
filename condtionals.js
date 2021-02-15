const raining = true;
const cold = false;
const temperature = 12;

if(raining){
	console.log( "don't forget your umbrella");
}
if (temperature < 0){
	console.log("make sure you bring your scarf");
} else if(temperature <15){
	console.log("short sleeves won't cut it");
} else{
	console.log("short sleeves are fine.");
}

console.log("Now you're ready to go outside!");

