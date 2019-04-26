const _ = require("lodash");

const numbers = [23,32,"hello",34,42,5,43,32,232];

_.each(numbers, function(numbers,i ){

    console.log(numbers);
})