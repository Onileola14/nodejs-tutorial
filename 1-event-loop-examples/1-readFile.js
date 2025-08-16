const { log } = require('console');
const {readFile} = require('fs');
const { result } = require('lodash');

console.log('start the first task');

readFile('./content/first.txt', 'utf8', (err , result) => {
    if (err) {
        console.log(err);
        return
    }

    console.log(result)
    console.log('task complet')
})
console.log('starting the next task');


