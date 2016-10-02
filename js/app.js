var computerthing;
var computer;
var userthing;
var result;

function takeinrock(){
	userthing = "rock"
	console.log("userthing, "+userthing)
	generate()
}

function takeinpaper(){
	userthing = "paper"
	console.log("userthing, "+userthing)
	generate()
}

function takeinscissors(){
	userthing = "scissors"
	console.log("userthing, "+userthing)
	generate()
}



function generate(){
	computer= Math.floor(Math.random() * 3)
	identify();
}

function identify(){
	if (computer == 0) {
		 computerthing = "rock"
	} else if (computer == 1) {
		computerthing = "paper"
	} else if (computer == 2) {
		computerthing = "scissors"
	} else {
		computerthing = undefined
	}
	console.log("computer, "+computer+" computerthing, "+computerthing);
	decide()

}

function decide(){
	if (computerthing == "rock" && userthing == "scissors"){
		result = "computer wins!"
		console.log(result)
	}else if (computerthing == "rock" && userthing == "paper") {
		result = "you win!"
		console.log(result)
	}else if (computerthing == "paper" && userthing == "rock") {
		result = "computer wins!"
		console.log(result)
	}else if (computerthing == "paper" && userthing == "scissors") {
		result = "you win!"
		console.log(result)
	}else if (computerthing == "scissors" && userthing == "paper"){
		result = "computer wins!"
		console.log(result)
	}else if (computerthing == "scissors" && userthing == "rock") {
		result = "you win!"
		console.log(result)
	}else if (computerthing == userthing) {
		result = "it's a tie!"
		console.log(result)
	}else{
		result= "error"
		console.log(result)
	}
	display()
}

function display(){
	var dp = document.createElement("h1");
	document.body.appendChild(dp);
	dp.id = "display";
	document.getElementById("display").innerHTML= result+" You put "+userthing+" and the computer put "+computerthing;
	playSound()
}

function playSound(){
	var audio = new Audio('assets/fanfare.mp3');
	audio.play();
}












