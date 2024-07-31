const http = require('http')
const server = http.createServer((req,res) =>{
  console.log(req)
  res.write('Hello, Welcome to the HomePage')
  res.end()
})

server.listen(2000)