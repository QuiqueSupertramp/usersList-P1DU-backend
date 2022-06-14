import {Router} from 'express'
import { createUser, deleteUser, getAllUsers, getUser, updateUser } from '../controllers/users.controllers.js'

const usersRouter = Router()

usersRouter.get('/', getAllUsers)
usersRouter.get('/:id', getUser)
usersRouter.post('/', createUser)
usersRouter.patch('/:id', updateUser)
usersRouter.delete('/:id', deleteUser)

export default usersRouter