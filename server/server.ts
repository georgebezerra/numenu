import * as http from 'http'
import Api from './api/loader'

const models = require('./models')

const config = require('./config/env/config')()

const server = http.createServer(Api)

models.sequelize.sync().then(() => {
  server.listen(config.serverPort)
  server.on('listening', () => console.log(`Servidor está rodando na porta ${config.serverPort}`))
  server.on('error', (error: NodeJS.ErrnoException) => console.log(`Ocorrevu um erro: ${error}`))
})
