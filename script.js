function vertical(){
    var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o"];
    for(c=1; c<=510; c++){
        var array = [];
        for(d=0; d<alphabet.length; d++){
            var test = alphabet[d]+c;
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
function removeEmpty(received){
    var array2 = [];
    for(a = 0; a<received.length; a++){
        if(isNaN(received[a])==false){
            array2.push(received[a]);
        }
    }
    return array2;
}
function addLinkedScenes(received){
    var allClass2 = [];
    var allClass = document.querySelectorAll("[class ='"+received[0]+"']");
    allClass.forEach(e => { allClass2.push(e.childNodes); });
    for(a = 0; a<allClass2.length; a++){
        var circle = allClass2[a][1];
        if(a>0){
            circle2 = allClass2[a-1][1];
            if(circle.id.substring(1) != circle2.id.substring(1)){ // removing duplicates
                received.push(parseInt(circle.id.substring(1)));
            }
        } else {
            received.push(parseInt(circle.id.substring(1)));
        }
    }
}
function changeDisplay(x){
    if(x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function changeElementVisibility(received) {
    for(a=0; a<received.length; a++){
        var x = document.querySelector("#t"+received[a]).firstChild;
        changeDisplay(x)
    }
    received.sort();
    var y = document.getElementById(received[0].toString().concat(received[received.length-1]));
    changeDisplay(y)
}
function displayConnections(id0, id1, id2, id3, id4, id5) {
    var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o"];
    var received = [id0, id1, id2, id3, id4, id5];
    received = removeEmpty(received);
    addLinkedScenes(received);

    if(document.querySelector("#t"+id0).firstChild){ //if exists in DOM
        changeElementVisibility(received);
    } else { //if doesn't exist in DOM
        var array = [];
        for(b = 0; b<received.length; b++){
            for(a = 0; a<alphabet.length; a++){
                var test = alphabet[a] + received[b];
                if(document.getElementById(test)!==null){
                    array.push(test);
                    break;
                }
            }
        }

        for(a=0; a<array.length; a++){
                getX(array[a]);
                createCircle(array[a], "ex"+array[a].substring(1));
        }
        array.sort(function(a, b){
            return a.substring(1, a.lenght) - b.substring(1, b.length);
        });

        var x1 = getX(array[0]);
        var x2 = getX(array[array.length-1]);
        createLineX(x1, x2, array[0].substring(1), array[array.length-1].substring(1));
    }
}
function getX(a){
    var el = document.getElementById(a);
    var element =el.getBoundingClientRect();
    var x = (element.left+element.right)/2+window.pageXOffset;
    return parseInt(x);
}
function onBodyScroll(){
    var x = document.getElementById("titles");
    var offset = window.pageYOffset;
    var top = parseInt(window.getComputedStyle(x).getPropertyValue("top"));
    if(top < 266){
        var new_top = 50-offset;
    } else {
        var new_top = 50+offset;
    }
    x.style.top = new_top+"px";
}
function createCircle(a, b){
    var myCircle = document.createElementNS("http://www.w3.org/2000/svg","circle"); //to create a circle. for rectangle use "rectangle"
    myCircle.setAttributeNS("null", "cx", "10");
    myCircle.setAttributeNS("null", "cy", "10");
    myCircle.setAttributeNS("null", "r", "5");
    myCircle.setAttributeNS("null", "stroke", "black");
    myCircle.setAttributeNS("null", "stroke-width", "2");
    myCircle.setAttributeNS("null", "fill", "white");
    myCircle.setAttributeNS("null", "id", b);
    myCircle.setAttributeNS("null", "dupa", b);
    var table = "t"+a.substring(1, a.length);
    document.getElementById(table).appendChild(myCircle);
}

function createLineX(x1, x2, n1, n2){
    var myLine = document.createElementNS("http://www.w3.org/2000/svg","line"); //to create a circle. for rectangle use "rectangle"
    myLine.setAttribute("x1",x1);
    myLine.setAttribute("y1",20);
    myLine.setAttribute("x2",x2);
    myLine.setAttribute("y2",20);
    myLine.setAttribute("id", n1+n2);

    document.getElementById("big").appendChild(myLine);
}
function createLineY(y1, y2, x1, n1, n2){
    var myLine = document.createElementNS("http://www.w3.org/2000/svg","line"); //to create a circle. for rectangle use "rectangle"
    myLine.setAttribute("x1",x1);
    myLine.setAttribute("y1",y1+window.pageYOffset);
    myLine.setAttribute("x2",x1);
    myLine.setAttribute("y2",y2+window.pageYOffset);
    myLine.setAttribute("id", n1+n2);

    document.getElementById("big").appendChild(myLine);
}

function checkArray(id1){
    var str = id1.toString();
    var letter = str.substring(0, 1);
    var number = str.substring(1);
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
        var x = document.getElementById(array[0]+array[array.length-1]);
        x.style.stroke = "rgb(255,0,0)";
        for(a=0; a<=array.length; a++){
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