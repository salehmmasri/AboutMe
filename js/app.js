
'use strict';
var total = 0;
var uName = prompt('please enter your name');
console.log(uName);

alert('hello ' + uName + ' we will play yes or no game oki (Y/N)');
var major = prompt('my major is software eng').toLowerCase();
console.log('major  ' + major);
switch (major) {
case 'yes':
case 'y' :
  total = total + 1;
  console.log('Major yes true');
  alert('your answer is true');
  break;

default:
  alert('your answer is false');

  console.log('Major No False');

}

var car = prompt('Do I have a car?').toLowerCase();
console.log('car  ' + car);

switch (car) {
case 'yes':
case 'y':
  total++;
  console.log('car yes true');
  alert('your answer is true');
  break;

default:
  alert('your answer is false');

  console.log('car No False');

}

var coffee = prompt('I love coffee').toLowerCase();
switch (coffee) {
case 'yes':
case 'y':
  total++;
  console.log(`coffee yes true ${coffee}`);
  alert('your answer is true');
  break;

default:
  alert('your answer is false');

  console.log('coffee No False');

}

var color = prompt('my favorite color is black ').toLowerCase();
switch (color) {
case 'yes':
case 'y':
  total++;
  console.log('color yes true ');
  alert('your answer is true');
  break;

default:
  alert('your answer is false');

  console.log('color No False');

}

var sport = prompt('my favorite sport is football').toLowerCase();
switch (sport) {
case 'yes':
case 'y':
  total++;
  console.log('sport yes true ');
  alert('your answer is true');
  break;

default:
  alert('your answer is false');
  console.log('sport No False');

}
alert('you got ' + total);
alert('now lets play another game you should guss my age i will helpe you don\'t worry');
var myAge=prompt('please enter the number');
var count;
count=0;
do {
  if(myAge==24){
    alert('right answer');
    count=9;
  }
  else if(myAge>24){
    count++;
    myAge=prompt('too high try again');
    console.log(count);
  }
  else if(myAge<24){
    count++;
    myAge=prompt('too low');
    console.log(count);
  }
} while (count<=3);
if(count>3 && count<8){
  alert('the right answer is 24');
  console.log('in if'+count);
}

var arr=['bmw','kia','ferrari','lamborghini','mercedes'];
alert('now the last one you should guess my favoret car');
for (let i = 0; i < 6; i++) {
  var guess=prompt('guess my favoret car').toLowerCase();
  for (var j=0;j<arr.length;j++) {
    var check=arr[j]==guess;
    console.log(check);
    if(check){
      i=66;
      break;
    }

  }
}

function x(){
  console.log('saleh');
}
x();
