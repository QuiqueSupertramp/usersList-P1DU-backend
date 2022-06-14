import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import indexRouter from './routes/index.router.js'

dotenv.config()

const app = express()

app.use(express.json());

app.use('/', indexRouter)

const bootstrap = async ()=> {
   mongoose.connect(process.env.MONGODB_URL)
   console.log('Conectado a MongoDB')

   app.listen(process.env.PORT)
   console.log(`Servidor en port ${process.env.PORT}`)
}

bootstrap()
