var imena1 = ["Ilija", "Danilo", "Mirjana", "Ivana", "Dusan"];
var imena2 = [];
								//       [ ["Ilija", "Danilo", "Mirjana", "Ivana", "Dusan"] ]
imena2.push(imena1);


for ( var i=0; i<imena2.length; i++){
	var imena3 = imena2[i];
}


// console.log(imena3);

for ( var i=0; i<imena3.length; i++){
	console.log(imena3[i]);
}





var imena1 = [ "Ilija", "Danilo", "Mirjana", "Ivana", "Dusan" ];
var imena2 = [ "Dragan", "Milica", "Natasa" ];
var brojevi1 = [ 5, 10, 15, 20 ];
var brojevi2 = [ 25, 30, 35];

var all = [];									

all.push(imena1, imena2, brojevi1, brojevi2);	

for ( var i=0; i<all.length; i++){				
	// console.log(all[i]);
	console.log(all[i][0]);
	console.log(all[i][1]);
	console.log(all[i][2]);
	console.log(all[i][3]);
}												


var numbers = [];

function saberi(){
	var broj = prompt("unesi broj");
	if ( broj !="a" ){
		numbers.push(broj);
		saberi();
	}
	
}


saberi();

for ( var i=0; i<numbers.length; i++){
	console.log(parseInt(numbers[i])+parseInt(numbers[i]));
}
