


function printRandumNumber() {

    var rndnum = Math.floor(Math.random() * 10);
    console.log(rndnum);
}
printRandumNumber();


function returnRandumNumberBetween() {
    return rndnum = Math.floor(Math.random() * 10);
}
returnRandumNumberBetween();

function getNumberRandum(number) {

    var random = Math.floor(Math.random() * number);
    return random;
}
getNumberRandum(5);


function getRandumNumberFromUser(number) {
    var random = Math.floor(Math.random() * 10);
    if (random == number) {
        console.log("true");
    }
    else {
        console.log("false");
    }
}
getRandumNumberFromUser(+prompt("enter number"));


function getRandumInArray() {
    var newArray = [];

    for (var i = 0; i < 10; i++) {
        var random = Math.floor(Math.random() * 100)
        newArray.push(random);
    } console.log(newArray);
}
getRandumInArray();


function getMaxRandomNumber() {
    var random = Math.floor(Math.random() * 10)
    var number = +prompt("enter number")
    return Math.max(number, random);
}
getMaxRandomNumber()


function getFiveNumber() {
    var num = [];
    for (var i = 0; i < 5; i++) {
        var number = +prompt("enter number");

        num = number
    }
    console.log(Math.min(num));
}
getFiveNumber();

function getRandomNumberAndNaan() {
    var random = Math.floor(Math.random() * 100)
    var number = +prompt("number")
    if (number % 2 == 0) {
        return Math.min(random, number);
    }
    else {

        return Math.max(random, number);
    }
}
getRandomNumberAndNaan();

function getTwoRandoms() {
    var array = [];
    var random = Math.floor(Math.random() * 364);
    for (var i = 0; i < random; i++) {
        var random1 = Math.floor(Math.random() * 873)
        array.push(random1);
    }
    return array;
}
getTwoRandoms();

function getRandomString (){
var nameuser =prompt("enter name")
var random  =Math.floor(Math.random()*nameuser.length)
console.log(nameuser[random].toUpperCase());
}
getRandomString();

function printIRandom(array) {
    var i = Math.floor(Math.random() * array.length);
    console.log(array[i]);
}
printIRandom([2, 55, 669, 8, 5415,])

function getTwoNumberAndToNames() {
    var name1 = prompt("enter name1");
    var name2 = prompt("enter name2");
    var number1 = +prompt("enter number1");
    var number2 = +prompt("enter number2");
    var random = Math.floor(Math.random() * 10);
    if (name1[0].toLowerCase() == name2[0].toLowerCase()) {
        console.log(random);
    }
    if (name1[name1.length - 1].toLowerCase() == name2[name2.length - 1].toLowerCase()) {
        console.log("last i");
    }
    else {
        console.log(number1, number2);
    }

}
getTwoNumberAndToNames();


function getNumberFromUser() {
    var name = prompt;
    var random = Math.floor(Math.random() * 5);
    console.log(substr(0, random));
}
getNumberFromUser();
