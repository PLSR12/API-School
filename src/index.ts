import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import swaggerUi from 'swagger-ui-express'
import router from './routes/Routes'
import swaggerFile from '../swagger.json'

dotenv.config()

const app = express()
app.use(express.json())

app.use(router)
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.listen(process.env.APP_PORT, () => {
  console.log(`${process.env.APP_NAME} running on port ${process.env.APP_PORT}`)
})
