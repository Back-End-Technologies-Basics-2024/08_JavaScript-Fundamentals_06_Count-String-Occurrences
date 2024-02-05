function solve(string, searchWord) {
    'use strict';

    let words = string.split(" ");
    let counter = 0;

    for(let word of words) {
      // Check if the current word is equal to the searchWord
      if (word === searchWord) {
        counter++;
    }
    }
console.log(counter);

}

solve('This is a word and it also is a sentence',
'is')