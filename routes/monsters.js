import { Router } from 'express'
import * as monstersCtrl from '../controllers/monsters.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, monstersCtrl.create)

export { router }