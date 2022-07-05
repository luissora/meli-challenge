import { Request, Response } from 'express'
import { mediator } from '../app/infrastructure/services'

import { ActionsType, ProductsDetailsProps, ProductsProps } from '../models/products/types'

import { formatter } from '../app/helpers'

const getProductsByQuery = async (request: Request, response: Response) => {
    try {

        if(!request.query?.q)
            return response.status(400).json(formatter.responseException(400))

        const result = await mediator.send<ProductsProps[]>(ActionsType.GET_PRODUCTS_BY_QUERY, request.query.q)
        return response.status(200).json({
            author: {
                name: '',
                lastname: ''
            },
            categories: [],
            items: result
        })
        
    } catch (error) {
        console.error('getProductsByQuery', error)
        return response.status(500).json(formatter.responseException(500, 'Se produjo un error en los servicios'))
    }
}

const getProductById = async (request: Request, response: Response) => {
    try {
        if(!request.params[0])
            return response.sendStatus(400)
        
        const result = await mediator.send<ProductsDetailsProps>(ActionsType.GET_PRODUCTS_BY_ID, request.params[0])
        return response.status(200).json({
            author: {
                name: '',
                lastname: ''
            },
            item: result
        })
    } catch (error) {
        console.error('getProductById', error)

        return response.status(500).json(formatter.responseException(500, 'Se produjo un error en los servicios'))
    }
}

export {
    getProductsByQuery,
    getProductById
}