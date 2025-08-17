const http = require('http')

const server = http.createServer((req , res ) => {
    console.log('event request');
    res.end('hello world')
    

})


server.listen(5000 , () => {
    console.log('server listen to port 5000')
})