import express from 'express'
import { create, findAll, topNews, findById, findByTitle, findByUser } from '../controllers/news.controller.js'
import { authMiddleware } from '../middlewares/auth.middlewares.js'
const route = express.Router()

route.post('/', authMiddleware, create)
route.get('/', findAll)
route.get('/byUser', authMiddleware, findByUser)
route.get('/top', topNews)
route.get('/search', findByTitle)

route.get('/:id', authMiddleware, findById)

export default route