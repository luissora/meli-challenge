import { Router } from 'express'

const router = Router()

/** controllers */
import { getProductsByQuery, getProductById } from '../controllers/products.controller'


/**
 * @swagger
 * /products/items/?q=:query: 
 *   get:
 *     description: Devuelve listado de productos dado una consulta.
 *     tags: [Productos]
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.route('/items').get(getProductsByQuery)

/**
 * @swagger
 * /products/items/:id:
 *   get:
 *     description: Devuelve el detalle de un producto dado el id.
 *     tags: [Productos]
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.route('/items/*').get(getProductById)



export default router;