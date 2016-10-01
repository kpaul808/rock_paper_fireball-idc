var computerthing;
var computer;
var userthing;

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
	recognize()
	console.log("computer, "+computer+" computerthing, "+computerthing);

}

function recognize(){

}