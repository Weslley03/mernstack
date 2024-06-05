import express from 'express'
import userController from '../controllers/user.controller.js'
import{ validId, validUser } from '../middlewares/global.middlewares.js'

const route = express.Router()

route.post('/create', userController.create)
route.get('/', userController.findAll)
route.get('/findById/:id?', validId, userController.findById)
route.patch('/findByIdUpdate/:id?', validId, userController.update)
route.delete('/findByIdDelete/:id?', validId, validUser, userController.remove)

export default route