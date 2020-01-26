const {Router} = require ('express')
const routes = Router()
const userController = require('./controllers/UserController')
const SearchController = require('./controllers/SearchController')

routes.get('/users', userController.indexedDB)
routes.post('/users', userController.store )
routes.get('/search', SearchController.index)





module.exports = routes