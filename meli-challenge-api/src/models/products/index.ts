import products from './products'
import { mediator } from '../../app/infrastructure/services'

import { ActionsType } from './types'

const runMediatorProducts = () => {
    const product = new products()

    mediator.suscribe(ActionsType.GET_PRODUCTS_BY_QUERY, product.getByQuery)
    mediator.suscribe(ActionsType.GET_PRODUCTS_BY_ID, product.getById)
}

export {
    runMediatorProducts
}

