import 'reflect-metadata'
import express from 'express'
import cors from 'cors'
import routes from './routes'
import * as dotenv from 'dotenv'

dotenv.config()
const app: express.Application = express()

app.use(express.json())
app.use(cors())
app.use(routes)

app.listen(3333, () => console.log('Server started'))
