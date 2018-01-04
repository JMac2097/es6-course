/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
import Animal from './Animal';
logTitle('Default Exports and Imports');
/* coding examples */

const name2 = 'Derek',
country = "Canada",
age = 56;

log("Name: " + name2 + " Country: " + country + " Age: " + age);
log(`Name: ${name2} Country: ${country} Age: ${age}`);

const arrayOne = ['Derek', 'Dave', 'Mario'];
const arrayTwo = ['Nigel', 'Burt', 'Fred'];
const concatArray = [...arrayOne];

concatArray.forEach(function(name){
    log(name);
});

const name = "Max";
const nameToArray = [...name];
nameToArray.forEach(function(letter){
    log(letter);
});

const addNumbers = (n1,n2,n3,n4,n5) => {
    return n1 + n2 + n3 + n4 + n5;
}

const numbers = [2,1,3,5,18];
const addition = addNumbers(...numbers);

log(addition);

const address = {
    city: 'LA',
    country: 'USA',
    postcode: 'LA23'
};

const name3 = {
    firstname: 'Derek',
    lastname: 'Beerrerr'
};

const person = {
    ...address, ...name3
};

log(JSON.stringify(person, null, 2));

const hello = () => {
    const es6 = 'ES6';
    return `Hello ${es6}`;
  };
  
  const powers = [1,2,3,4,5].map((number, index) => Math.pow(number, index));
  
  const add = (n1, n2) => n1 + n2;
  
  const milesToKm = miles =>  miles * 1.60934;
  
  log(hello());
  log(powers);
  log(add(100,100));
  log(milesToKm(100));
  