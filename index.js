
require('dotenv').config() //This .congig() method adds the  the .env file variables to the process.env object
const http  = require('node:http');

const hostName = '127.0.0.1'
const port = process.env.PORT

const server = http.createServer((req, res)=>{
  res.statusCode = 200

  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World')
})

server.listen(port, hostName, ()=>{
  console.log(`Server running at http://${hostName}:${port}/`)
})

