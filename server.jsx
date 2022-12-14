const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('blogData2.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(443, () => {
  console.log('JSON Server is running on port: 443')
})