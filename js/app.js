/* eslint-disable no-unused-vars */
'use strict';
var total=0;
var uName = prompt('please enter your name');
console.log(uName);
alert('hello ' + uName + ' we will play (Y/N) ');
var major = prompt('my major is software eng');
console.log('major  ' + major);
var testMajor = major.toLowerCase();
switch (testMajor) {
case 'yes':
  total=total+1;
  console.log(total);
  console.log('Major yes true');

  break;

default:

  console.log('Major No False');

}

var car = prompt('Do I have a car?');
console.log('car  ' + car);

var testcar = car.toLowerCase();
switch (testcar) {
case 'yes':
  total++;
  console.log('car yes true');

  break;

default:

  console.log('car No False');

}

var coffee = prompt('I love coffee');
var testCoffee = coffee.toLowerCase();
switch (testCoffee) {
case 'yes':
  total++;
  console.log(`coffee yes true ${coffee}`);

  break;

default:

  console.log('coffee No False');

}

var color = prompt('my favorite color is black ');
var testColor = color.toLowerCase();
switch (testColor) {
case 'yes':
  total++;
  console.log('color yes true ');

  break;

default:

  console.log('color No False');

}

var sport = prompt('my favorite sport is football');
var testSport = sport.toLowerCase();
switch (testSport) {
case 'yes':
  total++;
  console.log('sport yes true ');

  break;

default:

  console.log('sport No False');

}
alert('you got '+total);