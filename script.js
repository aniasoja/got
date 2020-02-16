function vertical(){
	var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o"];
	for(c=1; c<=510; c++){
		var array = [];
		for(d=0; d<alphabet.length; d++){
			var test = alphabet[d]+c;
			//console.log(test);
			if(document.getElementById(alphabet[d]+c)!==null){
				array.push(alphabet[d]+c);
			}
		}
		if(array.length>1){
	var y1 = getY(array[0]);
	var y2 = getY(array[array.length-1]);
	var x1 = getX(array[0]);
	//x1.round();
	//x2.round();
	console.log(y1, y2, x1, array[0], array[array.length-1]);
	createLineY(y1, y2, x1, array[0], array[array.length-1]);
		}
		
	}
}
function getY(a){
	var el = document.getElementById(a);
	var element = el.getBoundingClientRect();
	var y = (element.top+element.bottom)/2;
	return parseInt(y);
}

function displayConnections(id0, id1, id2, id3, id4, id5) {
	var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o"];
	var array = [];
	var received = [id0, id1, id2, id3, id4, id5];
	var numbers = [];
	for(a = 0; a<received.length; a++){
		if(received[a]>0){
			numbers.push(received[a]);
		}
	}
	for(b = 0; b<numbers.length; b++){
		for(a = 0; a<alphabet.length; a++){
			var test = alphabet[a] + numbers[b];
			if(document.getElementById(test)!==null){
				array.push(test);
				break;
			}
		}
	}
	
	for(a=0; a<array.length; a++){
		getX(array[a]);
		createCircle(array[a]);
	}
	array.sort(function(a, b){
		return a.substring(1, a.lenght) - b.substring(1, b.length);
	});
	console.log(array);
	var x1 = getX(array[0]);
	var x2 = getX(array[array.length-1]);
	//x1.round();
	//x2.round();
	console.log(x1, x2);
	createLineX(x1, x2);
}
function getX(a){
	var el = document.getElementById(a);
		var element = el.getBoundingClientRect();
		var x = (element.left+element.right)/2;
		return parseInt(x);
}
function createCircle(a){
	var myCircle = document.createElementNS("http://www.w3.org/2000/svg","circle"); //to create a circle. for rectangle use "rectangle"
	myCircle.setAttributeNS("null", "cx", "10");
	myCircle.setAttributeNS("null", "cy", "10");
	myCircle.setAttributeNS("null", "r", "5");
	myCircle.setAttributeNS("null", "stroke", "black");
	myCircle.setAttributeNS("null", "stroke-width", "2");
	myCircle.setAttributeNS("null", "fill", "white");
	var table = "t"+a.substring(1, a.length);
    document.getElementById(table).appendChild(myCircle);
}

function createLineX(x1, x2){
    var myLine = document.createElementNS("http://www.w3.org/2000/svg","line"); //to create a circle. for rectangle use "rectangle"
    myLine.setAttributeNS("null","x1",x1);
    myLine.setAttributeNS("null","y1",100);
    myLine.setAttributeNS("null","x2",x2);
    myLine.setAttributeNS("null","y2",100);
    //myLine.setAttributeNS("null", "id", "test2");

    document.getElementById("big").appendChild(myLine);
}
function createLineY(y1, y2, x1, n1, n2){
    var myLine = document.createElementNS("http://www.w3.org/2000/svg","line"); //to create a circle. for rectangle use "rectangle"
    myLine.setAttributeNS("null","x1",x1);
    myLine.setAttributeNS("null","y1",y1);
    myLine.setAttributeNS("null","x2",x1);
    myLine.setAttributeNS("null","y2",y2);
    myLine.setAttributeNS("null", "id", n1+n2);

    document.getElementById("big").appendChild(myLine);
}
/*
  var x = document.getElementById(id1);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }  

*/

function checkArray(id1){
	var str = id1.toString();
	var letter = str.substring(0, 1);
	var number = str.substring(1, str.lenght);
	var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o"];
	var array = [];
	array.push(id1);
	for(a = 0; a<alphabet.length; a++){
		var test = alphabet[a] + number;
		
		if(document.getElementById(test)!==null && test != id1){
				array.push(test);
		}
	}
	return array;
}

function hoverFunction(id1){
	var array = checkArray(id1);
	if(array.length>1){
		array.sort();
		//var x = document.getElementById(array[0]+array[array.length-1]);
		//x.style.stroke = "rgb(255,0,0)";
		for(a=0; a<array.length; a++){
			var y = document.getElementById(array[a]);
			y.style.stroke = "red";
		}	
	}	
}

function outFunction(id1){
	var array = checkArray(id1);
	if(array.length>1){
		array.sort();
		var x = document.getElementById(array[0]+array[array.length-1]);
		x.style.stroke = "rgb(180,180,180)";
		for(a=0; a<array.length; a++){
			var y = document.getElementById(array[a]);
			y.style.stroke = "black";
		}	
	}
}

function showCharacters(id1, id2, id3, id4, id5, id6){

};
function MMR(id1){

}
