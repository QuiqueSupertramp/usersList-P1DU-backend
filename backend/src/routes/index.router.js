import {Router} from 'express'
import { createUser, deleteUser, getAllUsers, getUser, updateUser } from '../controllers/users.controllers.js'

const indexRouter = Router()

indexRouter.get('/', getAllUsers)
indexRouter.get('/:id', getUser)
indexRouter.post('/', createUser)
indexRouter.patch('/:id', updateUser)
indexRouter.delete('/:id', deleteUser)

export default indexRouter