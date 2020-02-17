var scenes = document.querySelectorAll("#numbers")
var titles = document.querySelectorAll("#titles");

/* s1
1-44 2-30 3-30 4-26 5-20 6-16 7-22 8-35 9-20 10-26
       74  104 130  150  166  188  218  238  264
s2
1-21 2-19 3-23 4-20 5-22 6-20 7-26 8-22 9-48 10-21
285  304   327 347  367  387  407  429  477  510
 */
var scenesNumbers = {
    s1: {
        e1: "40",
        e2: "73",
        e3: "103",
        e4: "129",
        e5: "149",
        e6: "164",
        e7: "187",
        e8: "218",
        e9: "238",
        e10: "264"
    },
    s2: {
        e1: "285",
        e2: "304",
        e3: "327",
        e4: "347",
        e5: "367",
        e6: "387",
        e7: "407",
        e8: "429",
        e9: "459",
        e10: "473"
    }
}

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var element;

var c2 = document.getElementById("linecanvas");
var ctx2 = c2.getContext("2d");

var getLen = function (begin, end) {
    return end - begin;
}

var createRect = function (beginNumber, endNumber, text) {
    var elBegin = getEl(beginNumber);
    var elEnd = getEl(endNumber);
    var posBegin = getPos(elBegin);
    var posEnd = getPos(elEnd);
    var length = getLen(posBegin.x, posEnd.x);
    ctx.beginPath();
    ctx.font = "15px Times";
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "coral";
    ctx.fillRect(posBegin.x, posBegin.y - 86, length - 4, 27);
    ctx.fillStyle = 'white';
    ctx.fillText(text, posBegin.x + length / 2, posBegin.y - 66);


}


createRect("1", scenesNumbers.s1.e1, "S01 Episode 1")
createRect(scenesNumbers.s1.e1, scenesNumbers.s1.e2, "S01 Episode 2")
createRect(scenesNumbers.s1.e2, scenesNumbers.s1.e3, "S01 Episode 3")
createRect(scenesNumbers.s1.e3, scenesNumbers.s1.e4, "S01 Episode 4")
createRect(scenesNumbers.s1.e4, scenesNumbers.s1.e5, "S01 Episode 5")
createRect(scenesNumbers.s1.e5, scenesNumbers.s1.e6, "S01 Episode 6")
createRect(scenesNumbers.s1.e6, scenesNumbers.s1.e7, "S01 Episode 7")
createRect(scenesNumbers.s1.e7, scenesNumbers.s1.e8, "S01 Episode 8")
createRect(scenesNumbers.s1.e8, scenesNumbers.s1.e9, "S01 Episode 9")
createRect(scenesNumbers.s1.e9, scenesNumbers.s1.e10, "S01 Episode 10")
createRect(scenesNumbers.s2.e2, scenesNumbers.s2.e1, "S02 Episode 1")
createRect(scenesNumbers.s2.e1, scenesNumbers.s2.e2, "S02 Episode 2")
createRect(scenesNumbers.s2.e2, scenesNumbers.s2.e3, "S02 Episode 3")
createRect(scenesNumbers.s2.e3, scenesNumbers.s2.e4, "S02 Episode 4")
createRect(scenesNumbers.s2.e4, scenesNumbers.s2.e5, "S02 Episode 5")
createRect(scenesNumbers.s2.e5, scenesNumbers.s2.e6, "S02 Episode 6")
createRect(scenesNumbers.s2.e6, scenesNumbers.s2.e7, "S02 Episode 7")
createRect(scenesNumbers.s2.e7, scenesNumbers.s2.e8, "S02 Episode 8")
createRect(scenesNumbers.s2.e8, scenesNumbers.s2.e9, "S02 Episode 9")
createRect(scenesNumbers.s2.e9, scenesNumbers.s2.e10, "S02 Episode 10")

function getPos(el) {
    // yay readability
    for (var lx = 0, ly = 0; el != null; lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);
    return {
        x: lx,
        y: ly
    };
}

var drawlines = function (coord) {
    ctx2.beginPath();
    ctx2.moveTo(coord.x, coord.y+11);
    ctx2.strokeStyle = "#CCCCCC"
    ctx2.lineTo(12950, coord.y+11);
    ctx2.stroke();
}

var drawlines2 = function (coord) {
    ctx2.beginPath();
    ctx2.moveTo(coord.x, coord.y);
    ctx2.strokeStyle = "#FADBCE"
    ctx2.lineTo(coord.x, 724);
    ctx2.stroke();
}

for (var i=1; i<42;i++){
    var coord = getPos(titles[0].childNodes[1].rows[i]);
    titles[0].childNodes[1].rows[i].setAttribute("style","height:23px;outline:#E2E2E2 solid");
    drawlines(coord);
}

for (var i=1; i<473;i++){
    var coord2 = getPos(scenes[0].children[i]);
    drawlines2(coord);
}

function getEl(number) {
    for (let i = 0; i < scenes[0].children.length; i++) {
        if (scenes[0].children[i].innerText == number) {
            element = scenes[0].children[i];
        }
    }
    return element;
}