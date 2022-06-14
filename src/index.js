import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import usersRouter from './routes/index.router.js'
import cors from 'cors'

dotenv.config()

const app = express()

app.use(cors());
app.use(express.json());

app.use('/', usersRouter)

const bootstrap = async ()=> {
   mongoose.connect(process.env.MONGODB_URL)
   console.log('Conectado a MongoDB')

   app.listen(process.env.PORT)
   console.log(`Servidor en port ${process.env.PORT}`)
}

bootstrap()
