const {readFile} = require('fs')
const { reject, result } = require('lodash')
const { resolve } = require('path')

const getFile = (path) => {

    return new Promise((resolve,reject) => {

    readFile(path, 'utf8', (err,result) => {

    if (err) {
        reject(err)
    }else{

        resolve(result)
    }
    
})

    }) 
    
}

getFile('./content/first.txt')
.then(result => console.log(result))
.catch(err => console.log(err))


