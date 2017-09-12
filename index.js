const server = require('express')()
const {resolve} = require('path')

const PORT = process.env.PORT || 3000
const isProd = process.env.NODE_ENV === 'prod'

server
  .set('view engine', 'html')
  .set('views', resolve(__dirname, 'views'))
  .get('/', (req, res) => {
    if (isProd) {
      return res.sendFile(resolve(__dirname, 'views', 'index.html'))
    }
    return res.sendFile(resolve(__dirname, 'views', 'index-dev.html'))
  })
  .get('/', (req, res, next) => res.json({message: 'hello and welcome'}))
  .listen(PORT, () => console.log('I am alive'))
