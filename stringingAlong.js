/**
 * Created by rush on 8/10/16.
 */

function explode (str){
    var length = str.length -1;
    var result = "";
    for (var i = 0; i <= length; i++){
        if (str.length <= 1){
            return str;
        } else {
            result = result + str.charAt(i) + " ";
        }
    }
    return result.trim();
}

console.log("explode(\"dude\") -> \"" + explode("dude") + "\"");
console.log("explode(\"this\") -> \"" + explode("this") + "\"");
console.log("explode(\"duh\") -> \"" + explode("duh") + "\"");
console.log("explode(\"yeah\") -> \"" + explode("yeah") + "\"");
console.log("explode(\"duder\") -> \"" + explode("duder") + "\"");
console.log("explode(\"dudeet\") -> \"" + explode("dudeet") + "\"");


function notString(str) {
    if (str.substring(0, 3) === "not"){
        return str;
    }
    else {
        return "not " + str;
    }
}

console.log("notString(\"candy\") -> " + notString("candy"));
console.log("notString(\"x\") -> " + notString("x"));
console.log("notString(\"notbad\") -> \"" + notString("notbad") + "\"");
console.log("notString(\"notbad\") -> \"" + notString("nobad") + "\"");
console.log("notString(\"notbad\") -> \"" + notString("bad not") + "\"");
console.log("notString(\"notbad\") -> \"" + notString("noad") + "\"");

function missingChar(str, n) {
    var front = str.substring(0, n);

    var back = str.substring(n+1, str.length);

    return front + back;
}

console.log("missingChar(\"kitten\", 1) -> " + missingChar("kitten", 1) + "\"");
console.log("missingChar(\"kitten\", 0) -> " + missingChar("kitten", 0) + "\"");
console.log("missingChar(\"kitten\", 4) -> " + missingChar("kitten", 4) + "\"");
console.log("missingChar(\"kitten\", 5) -> " + missingChar("kitten", 5) + "\"");
console.log("missingChar(\"kitten\", 2) -> " + missingChar("kitten", 2) + "\"");
console.log("missingChar(\"kitten\", 3) -> " + missingChar("kitten", 3) + "\"");

function frontBack(str) {
    if (str.length <= 1) return str;

    var mid = str.substring(1, str.length - 1);

    return str.charAt(str.length - 1) + mid + str.charAt(0);
}

console.log("frontBack(\"code\") -> \"" + frontBack("code") + "\"");
console.log("frontBack(\"a\") -> \"" + frontBack("a") + "\"");
console.log("frontBack(\"ab\") -> \"" + frontBack("ab") + "\"");
console.log("frontBack(\"rage\") -> \"" + frontBack("rage") + "\"");
console.log("frontBack(\"sucks\") -> \"" + frontBack("sucks") + "\"");
console.log("frontBack(\"bored\") -> \"" + frontBack("bored") + "\"");

function backAround(str) {
    var last = str.substring(str.length - 1);
    return last + str + last;
}

console.log("backAround(\"cat\") -> \"" + backAround("cat") + "\"");
console.log("backAround(\"Hello\") -> \"" + backAround("Hello") + "\"");
console.log("backAround(\"a\") -> \"" + backAround("a") + "\"");
console.log("backAround(\"bat\") -> \"" + backAround("bat") + "\"");
console.log("backAround(\"ello\") -> \"" + backAround("ello") + "\"");
console.log("backAround(\"aba\") -> \"" + backAround("aba") + "\"");

function front3(str){
    if (str.length <= 3){
        return str + str + str;
    } else {
        var first = str.substring(0,3);

        return first + first + first;
    }
}

console.log("front3(\"Java\") -> \"" + front3("Java") + "\"");
console.log("front3(\"Chocolate\") -> \"" + front3("Chocolate") + "\"");
console.log("front3(\"abc\") -> \"" + front3("abc") + "\"");
console.log("front3(\"baava\") -> \"" + front3("baava") + "\"");
console.log("front3(\"Choco\") -> \"" + front3("Choco") + "\"");
console.log("front3(\"abcdcv\") -> \"" + front3("abcdcv") + "\"");

function front22(str) {
    var thing = 2;
    if (thing > str.length) {
        thing = str.length;
    }

    var front = str.substring(0, thing);
    return front + str + front;
}

console.log("front22(\"kitten\") -> \"" + front22("kitten") + "\"");
console.log("front22(\"Ha\") -> \"" + front22("Ha") + "\"");
console.log("front22(\"abc\") -> \"" + front22("abc") + "\"");
console.log("front22(\"dude\") -> \"" + front22("dude") + "\"");
console.log("front22(\"duder\") -> \"" + front22("duder") + "\"");
console.log("front22(\"dudest\") -> \"" + front22("dudest") + "\"");

function delDel(str) {
    if (str.length >= 4 && str.substring(1, 4) == "del") {

        return str.substring(0, 1) + str.substring(4);
    } else {
        return str;
    }
}

console.log("delDel(\"adelbc\") -> \"" + delDel("adelbc") + "\"");
console.log("delDel(\"adelHello\") -> \"" + delDel("adelHello") + "\"");
console.log("delDel(\"adedbc\") -> \"" + delDel("adedbc") + "\"");
console.log("delDel(\"akjklddelkmkmdela\") -> \"" + delDel("akjklddelkmkmdela") + "\"");
console.log("delDel(\"adelbdelc\") -> \"" + delDel("adelbdelc") + "\"");
console.log("delDel(\"deddebdekdei\") -> \"" + delDel("deddebdekdei") + "\"");

function startOz(str) {
    var theEnd = "";

    if (str.length >= 1 && str.charAt(0)=='o') {
        theEnd = theEnd + str.charAt(0);
    } if (str.length >= 2 && str.charAt(1)=='z') {
        theEnd = theEnd + str.charAt(1);
    } if (!(str.charAt(0)=='o') && !(str.charAt(1)=='z')){
        theEnd = str.substring(0,2);
    }
    return theEnd;
}

console.log("startOz(\"ozymandias\") -> \"" + startOz("ozymandias") + "\"");
console.log("startOz(\"bzoo\") -> \"" + startOz("bzoo") + "\"");
console.log("startOz(\"oxx\") -> \"" + startOz("oxx") + "\"");
console.log("startOz(\"kitten\") -> \"" + startOz("kitten") + "\"");
console.log("startOz(\"ooood\") -> \"" + startOz("ooood") + "\"");
console.log("startOz(\"asdf\") -> \"" + startOz("asdf") + "\"");
console.log("startOz(\"dfww\") -> \"" + startOz("dfww") + "\"");

function endUp(str){
    if (str.length <= 3) return str.toUpperCase();
    var snip = str.length - 3;
    var front = str.substring(0, snip);
    var back  = str.substring(snip);

    return front + back.toUpperCase();
}

console.log("endUp(\"Hello\") -> \"" + endUp("Hello") + "\"");
console.log("endUp(\"Hello\") -> \"" + endUp("hi there") + "\"");
console.log("endUp(\"Hello\") -> \"" + endUp("hi") + "\"");
console.log("endUp(\"dude This\") -> \"" + endUp("dude This") + "\"");
console.log("endUp(\"dangiT\") -> \"" + endUp("dangiT") + "\"");
console.log("endUp(\"woah BRo\") -> \"" + endUp("woah BRo") + "\"");

